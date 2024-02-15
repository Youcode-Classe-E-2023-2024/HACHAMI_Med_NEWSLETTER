<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\Role;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;


class AuthController extends Controller
{
    //

    public function loginG(){
        $imgUrl =  asset('images/logo.png') ;
        return Inertia::render('auth/Login' , [
            'imgUrl'=>$imgUrl
        ]);
    }

    public function registerG(){
        $imgUrl =  asset('images/logo.png') ;
        return Inertia::render('auth/Register' , [
            'imgUrl'=>$imgUrl
        ]);

    }

    public function registerP(RegisterRequest $request)
    {

        $credentials = $request->validated();


        $user = User::create([
           'name'=>$credentials['name'],
            'email'=>$credentials['email'],
            'password'=>bcrypt($credentials['password'])
        ]);

        $user->addRole('member');
        return redirect(route('login'));
    }

    public function loginP(LoginRequest $request){

        $credentials = $request->validated();


        if (Auth::attempt($credentials)) {
            $user = auth()->user();
            if ($user->hasRole('admin')) {
                return redirect(route('admin_dashboard'));
            } elseif ($user->hasRole('editor')) {
                return redirect(route('editor_dashboard'));
            }
        } else {
            throw ValidationException::withMessages([
                'message' => 'The credentials are not correct',
            ])->redirectTo(route('login'));
        }
    }

    public function logout(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect('/home');

    }

    public function subscribe(Request $request){

        $validated = $request->validate([
            'email'=>'required|email|unique:users'
        ]);



        $user = User::create([
            'name'=>'member',
            'email'=>$validated['email'],
            'password'=>'password',
        ]);


        $user->addRole('member');

        return redirect(route('home'));
    }


}
