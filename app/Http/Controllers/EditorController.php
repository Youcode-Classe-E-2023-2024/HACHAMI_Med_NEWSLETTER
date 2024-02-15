<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\template;
class EditorController extends Controller
{
    public function index()
    {
        $templates = template::with('media')->get();
//        dd($templates);
        return Inertia::render('editor/Layout', [
            'Route' => 'dashboard',
            'pageName' => 'Dashboard',
            'templates' => $templates,
        ]);
    }

    public function archiveTemplate($id){
        try {
            $template = template::findOrFail($id);
            $template->delete();
            return to_route('editor_dashboard');
        } catch (\Exception $e) {
                dd($e);
        }

    }
}
