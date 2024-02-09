<?php

namespace App\Http\Controllers;

use App\Mail\ForgetPasswordMail;
use Illuminate\Support\Facades\Mail;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;


class
AuthMailingController extends Controller
{
    //

    public function showForgetPassword(){
        return Inertia::render('auth/Forget');
    }

    public function ForgetPassword(Request $request){

        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
        ]);

        if ($validator->fails()) {
            // Handle validation failure
            throw ValidationException::withMessages($validator->errors()->toArray());
        }

        $user = User::where('email' , '=' , $request->email)->first();
        if(!empty($user)){
            $user->remember_token = Str::random(40);

            $user->save();
            Mail::to($user->email)->send(new ForgetPasswordMail($user));

//            return redirect()->back()->with('message','Check your email for reseting password');
            return Inertia::render('auth/Forget' ,['success'=>'Check your email for reseting password']);

        }else {
            throw ValidationException::withMessages([
                'message' => 'The email not found',
            ])->redirectTo(route('forget-password'));
        }

        return redirect(route('forget-password'));
    }

    public function showResetPassword(Request $request){
        $user = User::where('remember_token' , '=' , $request->token)->first();
        if(!empty($user)){
            return Inertia::render('auth/Reset',['token'=>$request->token]);
        }else{
            return redirect(route('forbidden'));
        }
    }

    public function ResetPassword(Request $request){
        $validator = Validator::make($request->all(), [
            'password' => ['required','confirmed','min:5','max:255'],
        ]);

        if ($validator->fails()) {
            // Handle validation failure
            throw ValidationException::withMessages($validator->errors()->toArray());
        }

        $token = $request->token;

        $user = User::where('remember_token' , '=' , $token)->first();
        if(!empty($user)){
            $user->password = bcrypt($request->password);
            $user->remember_token = Str::random(40);
            $user->save();
            return redirect(route('login'));


        }else{
            return redirect(route('forbidden'));
        }


    }
}
