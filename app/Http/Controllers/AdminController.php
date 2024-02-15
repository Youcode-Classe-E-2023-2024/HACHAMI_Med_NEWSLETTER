<?php

namespace App\Http\Controllers;

use App\Models\template;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    //

    public function index(){
        $members = User::whereHasRole('member')->select('id', 'email')->get();


        $memberCount = User::whereHas('roles', function ($query) {
            $query->where('name', 'member');
        })->count();


        $templateCount = template::whereNull('deleted_at')->get()->count();
//        dd($templateCount);



//        $templateCount = template::
        return Inertia::render('admin/Layout', [
            'Route'=>'dashboard',
            'pageName'=>'Main Dashboard',
            'members'=>$members,
            'memberCount'=>$memberCount,
            'templateCount'=>$templateCount
        ]);
    }

    public function deleteUsers(Request $request){
        $usersToDelete = $request->json()->all();

        foreach ($usersToDelete as $user) {
            User::where('id', $user['id'])->delete();
        }

        return to_route('admin_dashboard');


    }


    public function templates(){
        $templates = template::with('media')->get();

        return Inertia::render('admin/Layout', [
            'Route'=>'templates',
            'pageName'=>'Templates',
            'templates'=>$templates,
        ]);
    }

}
