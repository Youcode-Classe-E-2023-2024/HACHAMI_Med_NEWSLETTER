<?php

namespace App\Http\Controllers;

use App\Mail\ForgetPasswordMail;
use Illuminate\Support\Facades\Mail;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Str;


class
AuthMailingController extends Controller
{
    //

    public function showForgetPassword(){
        return view('auth.forget');
    }

    public function ForgetPassword(Request $request){
        $user = User::where('email' , '=' , $request->email)->first();
        if(!empty($user)){
            $user->remember_token = Str::random(40);
//            dd($user);

            $user->save();
            Mail::to($user->email)->send(new ForgetPasswordMail($user));

            return redirect()->back()->with('message','Check your email for reseting password');

        }else{
            return redirect()->back()->with('error','Email Not found');
        }
    }

    public function showResetPassword(Request $request){
        $user = User::where('remember_token' , '=' , $request->token)->first();
        if(!empty($user)){
            return view('auth.reset');
        }else{
            return redirect('forbidden');
        }
    }

    public function ResetPassword($token,Request $request){
        $data = $request->validate([
            'password'=>['required','confirmed','min:5','max:255']
        ]);

        $user = User::where('remember_token' , '=' , $token)->first();
        if(!empty($user)){
            $user->password = bcrypt($data['password']);
            $user->remember_token = Str::random(40);
            $user->save();
            return redirect('login')->with('success','Password changed successfully');
        }else{
            return redirect('forbidden');
        }

    }
}
