<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <style>
        img{
            width: 300px;
        }
        h2{
            color: #2a4365;
        }
        a{
            text-decoration: none;
            color: #fff5f5;
            background: #1a202c;
            padding: 10px;
            border-radius: 5px;
            width: 100px;
            white-space: nowrap;

        }
        .body{
            display: flex;
            flex-direction: column;
        }
        .title{
            color: #2b6cb0;
            font-size: 16px;
        }
    </style>
</head>
<body>
{{-- Header --}}

<img src="{{asset('images/logo.png')}}" class="w-1/2 h-1/2" alt="" srcset="">

{{-- Greeting --}}
<h2>Hello {{ $user->name  }}</h2>

<div class="content">
    <div class="body">
        <p class="text-red-500">You are receiving this email because we received a password reset request for your account, If you did not request a password reset, no further action is required.</p>
        <a href="{{url('/reset/'.$user->remember_token)}}" target="_blank">Reset Password</a>
    </div>
    <div class="footer">
        Thanks,
        <p class="title">{{ config('app.name') }}</p>
    </div>
</div>




</body>
</html>
