<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Register</title>
    @vite('resources/css/app.css')

</head>
<body>
<!-- component -->
<div>
    <div class="relative min-h-screen  grid bg-black ">
        <div class="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 ">
            <div  class="relative sm:w-1/2 xl:w-3/5 bg-blue-500 h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden  text-white bg-no-repeat bg-cover relative" style="background-image: url({{asset('images/logo.png')}});">
                <div class="absolute bg-black  opacity-25 inset-0 z-0"></div>
                <div class="w-full  lg:max-w-2xl md:max-w-md z-10 items-center text-center ">
                    <div class=" font-bold leading-tight mb-6 mx-auto w-full content-center items-center ">

                    </div>
                </div>
            </div>

            <div class="md:flex md:items-center md:justify-left w-full sm:w-auto md:h-full xl:w-1/2 p-8  md:p-10 lg:p-14 sm:rounded-lg md:rounded-none ">
                <div class="max-w-xl w-full space-y-12">
                    <div class="lg:text-left text-center">

                        <div class="flex items-center justify-center ">
                            <div class="bg-black flex flex-col w-96 border border-gray-900 rounded-lg px-8 py-10">

                                <form action="{{route('register')}}" method="POST" class="flex flex-col space-y-8 mt-10">
                                    @csrf
                                    <div class="flex flex-col">
                                        <label class="font-bold text-lg text-white " >Full Name</label>
                                        @error('name')
                                        <label class="font-semibold text-lg text-red-900 " >{{$message}}</label>
                                        @enderror
                                    </div>
                                    <input type="text" name="name"  placeholder="Enter the full name" class="border rounded-lg py-3 px-3 mt-4 bg-black border-indigo-600 placeholder-white-500 text-white">

                                    <div class="flex flex-col">
                                        <label class="font-bold text-lg text-white " >Email</label>
                                        @error('email')
                                        <label class="font-semibold text-lg text-red-900 " >{{$message}}</label>
                                        @enderror
                                    </div>
                                    <input type="text" name="email"  placeholder="Enter the full name" class="border rounded-lg py-3 px-3 mt-4 bg-black border-indigo-600 placeholder-white-500 text-white">

                                    <div class="flex flex-col">
                                        <label class="font-bold text-lg text-white">Password</label>
                                        @error('password')
                                        <label class="font-semibold text-lg text-red-900 " >{{$message}}</label>
                                        @enderror
                                    </div>
                                    <input type="password" name="password" formControlName="pin" placeholder="****" class="border rounded-lg py-3 px-3 bg-black border-indigo-600 placeholder-white-500 text-white">
                                    <div class="flex flex-col">
                                        <label class="font-bold text-lg text-white">Confirm Password</label>

                                    </div>
                                    <input type="password"  placeholder="****" name="password_confirmation"  class="border rounded-lg py-3 px-3 bg-black border-indigo-600 placeholder-white-500 text-white">
                                    <button  class="border border-indigo-600 bg-black text-white rounded-lg py-3 font-semibold" routerLink="/dashboard">Subscribe</button>
                                    <div class="text-gray-400">
                                        <span>I already Have An account</span>
                                        <a href="{{route('login')}}" class="underline">Sign In</a>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>

                </div>
</body>
</html>
