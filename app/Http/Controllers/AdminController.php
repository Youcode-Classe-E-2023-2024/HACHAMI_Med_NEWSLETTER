<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    //

    public function index(){
        return Inertia::render('admin/Layout', [
            'Route'=>'dashboard',
            'pageName'=>'Main Dashboard',
        ]);
    }


    public function about(){
        return Inertia::render('admin/Layout', [
            'Route'=>'about',
            'pageName'=>'About',
        ]);
    }

}
