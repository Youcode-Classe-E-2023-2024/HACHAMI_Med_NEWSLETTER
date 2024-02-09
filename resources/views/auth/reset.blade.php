<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Reset Password</title>
    @vite('resources/css/app.css')

</head>
<body>
<!-- component -->
<div>
    <div class="relative min-h-screen  grid bg-black ">
        <div class="flex flex-col sm:flex-row items-center md:items-center sm:justify-center md:justify-center flex-auto min-w-0 ">


            <div class="md:flex md:items-center md:justify-center w-full sm:w-auto md:h-full xl:w-1/2 p-8  md:p-10 lg:p-14 sm:rounded-lg md:rounded-none ">

                <div class="max-w-xl w-full space-y-12">
                    <h1 class="text-3xl text-white text-center">Newsletter-Reset Password </h1>

                    <div class="lg:text-left text-center">
                        <div class="flex items-center justify-center ">
                            <div class="bg-black flex flex-col w-96 border border-gray-900 rounded-lg px-8 py-10">

                                <form action="" method="POST" class="flex flex-col space-y-8 mt-10">
                                    @csrf

                                    <div class="flex flex-col">
                                        <label class="font-bold text-lg text-white " >New Password</label>
                                        @error('password')
                                        <label class="font-semibold text-lg text-red-900 " >{{$message}}</label>
                                        @enderror
                                    </div>
                                    <input type="password" name="password" formControlName="pin" placeholder="Enter new password" class="border rounded-lg py-3 px-3 bg-black border-indigo-600 placeholder-white-500 text-white">


                                    <input type="password" name="password_confirmation" formControlName="pin" placeholder="Confirm password" class="border rounded-lg py-3 px-3 bg-black border-indigo-600 placeholder-white-500 text-white">
                                    <button  class="border border-indigo-600 bg-black text-white rounded-lg py-3 font-semibold" >Reset Password</button>



                                </form>
                            </div>
                        </div>

                    </div>

                </div>
</body>
</html>
