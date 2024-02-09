<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\AuthMailingController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\EditorController;

use App\Mail\MyTestEmail;
use Illuminate\Support\Facades\Mail;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('auth.login');
});

Route::get('/home', function () {
    return view('auth.login');
});
//Authentication

Route::get('/login',[AuthController::class,'loginG'])->name('login');
Route::post('/login',[AuthController::class,'loginP'])->name('loginUser');

Route::get('/register',[AuthController::class,'registerG']);
Route::post('/register',[AuthController::class,'registerP'])->name('register');

Route::get('/forget-password',[AuthMailingController::class,'showForgetPassword'])->name('forget-password');
Route::post('/forget-password',[AuthMailingController::class,'ForgetPassword']);

Route::get('/reset/{token}',[AuthMailingController::class,'showResetPassword']);
Route::post('/reset/{token}',[AuthMailingController::class,'ResetPassword'])->name('reset');


// Admin Routes
Route::group(['middleware' => 'custom.admin'], function () {
    Route::get('/admin/dashboard',[AdminController::class,'index']);

    Route::get('/logout' , [AuthController::class,'logout']);
});

// Editor Routes
Route::group(['middleware' => 'custom.editor'], function () {
    Route::get('/editor/dashboard',[EditorController::class,'index']);


    Route::get('/logout' , [AuthController::class,'logout']);

});


Route::get('/forbidden',function (){
    return 'hhh';
});





