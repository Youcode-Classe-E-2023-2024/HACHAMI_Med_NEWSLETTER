<?php

namespace App\Http\Controllers;

use App\Http\Requests\TemplateRequest;
use App\Mail\TemplateMail;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use App\Models\template;
use Laratrust\Tests\Enums\Role;
use PhpParser\Node\Scalar\String_;


class TemplateController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
    }

    public function create(){

        return Inertia::render('editor/Layout',[
            'Route'=>'create',
            'pageName'=>'create/template',
        ]);

    }

//    /**
//     * Store a newly created resource in storage.
//     */
//    public function store(Request $request )
//    {
//        $files = $request->file('files');
//        if(!empty($files)){
//            $user = Auth::user();
//
//
//            $templateInput['creator'] = $user->name;
//
//
//            $template = template::create($templateInput);
//            $template->addMedia($files)
//                ->usingName($request->title)
//                ->toMediaCollection();
//            $Template = Template::with('media')->latest()->first();
//
//            if($templateInput['status'] !== 'Save later'){
//                $members = User::whereHasRole('member')->get();
//
//                foreach ($members as $member){
//                    Mail::to($member->email)->send(new TemplateMail($Template,$member));
//                }
//
//            }
//        }
//        else{
//            return Inertia::render('editor/Layout' ,[
//                'Route'=>'create',
//                'pageName'=>'create-template',
//                'file'=>'File is required',
//            ]);
//        }
//
//
//
//
//
//
//
//        return Inertia::render('editor/Layout' ,[
//            'success'=>'Template created successfully',
//            'Route'=>'create',
//            'pageName'=>'create-template',
//        ]);
//
//
//
//    }
    public function store(TemplateRequest $request)
    {
//
        $templateInput = $request->validated();

        if($request->hasFile('files')){
            $file = $request->file('files');
            $user = Auth::user();


            $templateInput['creator'] = $user->name;

            $template = template::create($templateInput);
            foreach ($request->file('files') as $index => $file) {
                $template->addMedia($file)
                    ->usingName($request->title . '_' . ($index + 1))
                    ->toMediaCollection();
            }


            $Template = Template::with('media')->latest()->first();

            if($templateInput['status'] !== 'Save later'){
                $members = User::whereHasRole('member')->get();

                foreach ($members as $member){
                    Mail::to($member->email)->send(new TemplateMail($Template,$member));
                }

            }
        }
        else{
            return Inertia::render('editor/Layout' ,[
                'Route'=>'create',
                'pageName'=>'create-template',
                'file'=>'File is required',
            ]);
        }







        return Inertia::render('editor/Layout' ,[
            'success'=>'Template created successfully',
            'Route'=>'create',
            'pageName'=>'create-template',
        ]);



    }

   public function send($id)
   {
       try {
           $template = Template::with('media')->findOrFail($id);


           $template->status = 'Publish now';

           $template->save();


           $members = User::whereHasRole('member')->get();

           foreach ($members as $member){
               Mail::to($member->email)->send(new TemplateMail($template,$member));
           }


           return to_route('editor_dashboard');


       } catch (\Exception $e) {

           dd($e);
       }
   }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
