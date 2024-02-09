<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Auth;


class AuthController extends Controller
{
    //

    public function loginG(){
        return view('auth.login');
    }

    public function registerG(){
        return view('auth.register');

    }

    public function registerP(Request $request)
    {
        $validate = $request->validate([
            'name'=>['required','min:6','max:45'],
            'email'=>['required','email',Rule::unique('users','email')],
            'password'=>['required','confirmed','min:5','max:255']
        ]);
        echo $validate['password'];


        $user = User::create([
           'name'=>$validate['name'],
            'email'=>$validate['email'],
            'password'=>bcrypt($validate['password'])
        ]);

        $user->addRole('admin');
        return redirect('login');
    }

    public function loginP(Request $request){
        $fields = $request->validate([
            'email' => 'required|string',
            'password' => 'required|string'
        ]);



        if (Auth::attempt($fields)) {
            $user = auth()->user();
            if(isset($request->remember) && !empty($request->remember)){
                setcookie("email",$fields['email'], time()+3600);
                setcookie("password",$fields['password'], time()+3600);
                setcookie("remember","on", time()+3600);

            }else{
                setcookie("email","", time()+3600);
                setcookie("password","", time()+3600);
            }
            if ($user->hasRole('admin')) {
                return redirect('/admin/dashboard');
            } elseif ($user->hasRole('editor')) {
                return redirect('/editor/dashboard');
            }
        } else {
            return redirect('/login')->with('message', 'The credentials are not correct');
        }
    }

    public function logout(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/login');
    }


}
