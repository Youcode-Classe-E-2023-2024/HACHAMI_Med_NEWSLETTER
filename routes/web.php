<?php

use App\Models\template;
use App\Models\User;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\AuthMailingController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\EditorController;


use Inertia\Inertia;
use App\Http\Controllers\TemplateController;


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
Route::get('/template', function() {
    $Template = Template::with('media')->latest()->first();
    $user = auth()->user();

//    if ($Template) {
//        // Accessing the first media's file_name
//        $fileName = $Template->getFirstMedia('default')->file_name;
//
//        $id = $Template->getFirstMedia('default')->id;
//
//
//        // Dump the results
//        dd($fileName,$id);
//    } else {
//        // Handle the case when there is no template
//    }
    return view('emails.template' ,[
        'user'=>$user,
        'Template'=>$Template,
    ]);
});

Route::get('/', function() {
    return Inertia::render('Home');
});
Route::get('/home' , function (){
    return Inertia::render('Home');
})->name('home');

Route::post('/subscribe',[AuthController::class,'subscribe']);


//Authentication
Route::group(['middleware' => 'guest'], function () {


    Route::get('/login',[AuthController::class,'loginG'])->name('login');
    Route::post('/login',[AuthController::class,'loginP'])->name('loginUser');

    Route::get('/register',[AuthController::class,'registerG']);
    Route::post('/register',[AuthController::class,'registerP'])->name('register');


    Route::get('/forget-password',[AuthMailingController::class,'showForgetPassword'])->name('forget-password');
    Route::post('/forget-password',[AuthMailingController::class,'ForgetPassword']);

    Route::get('/reset/{token}',[AuthMailingController::class,'showResetPassword'])->name('reset');
    Route::post('/reset',[AuthMailingController::class,'ResetPassword']);


});


    Route::group(['middleware' => 'auth'], function () {


        // Admin routes
        Route::group(['middleware' => 'custom.admin'], function () {


            Route::get('/admin/dashboard', [AdminController::class, 'index'])->name('admin_dashboard');
            Route::get('/admin/templates', [AdminController::class, 'templates']);
            Route::delete('/deleteUser', [AdminController::class, 'deleteUsers']);




        });

        // Editor routes
        Route::group(['middleware' => 'custom.editor'], function () {
            Route::get('/editor/dashboard', [EditorController::class, 'index'])->name('editor_dashboard');
            Route::get('/editor/create-template', [TemplateController::class, 'create'])->name('createtemplate');
            Route::post('/editor/save-template', [TemplateController::class, 'store']);
            Route::post('/editor/send-archived/{id}', [TemplateController::class, 'send']);
            Route::delete('/editor/template/{id}' , [EditorController::class,'archiveTemplate']);



        });


        // Logout route
        Route::post('/logout', [AuthController::class, 'logout'])->name('logout');
    });





Route::get('/forbidden',function (){
    return 'hhh';
})->name('forbidden');
