<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

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
    return view('home');
});

//Authentication

Route::get('/login',[AuthController::class,'loginG'])->name('login');
Route::post('/login',[AuthController::class,'loginP'])->name('loginUser');

Route::get('/register',[AuthController::class,'registerG']);
Route::post('/register',[AuthController::class,'registerP'])->name('register');


// Admin Routes
Route::group(['middleware' => 'custom.admin'], function () {
    Route::get('/admin/dashboard', function () {
        return "admin dashboard";
    });
});

// Editor Routes
Route::group(['middleware' => 'custom.editor'], function () {
    Route::get('/editor/dashboard', function () {
        return "editor dashboard";
    });
});


Route::get('/forbidden',function (){
    return 'hhh';
});
