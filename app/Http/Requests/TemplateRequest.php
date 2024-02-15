<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\ValidationException;

class TemplateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'status' => 'required|in:Publish now,Save later',
//            'files' => 'file|mimes:jpeg,png,jpg,gif,svg,mp4',

        ];
    }

    public function messages()
    {
        return [
            'title.required' => 'The title field is required.',
            'content.required' => 'The content field is required.',
            'status.required' => 'The status field is required.',
        ];
    }

    protected function failedValidation($validator)
    {
        throw new ValidationException($validator, $this->redirector->to($this->getRedirectUrl())
            ->withInput($this->input())
            ->withErrors($validator, $this->errorBag));
    }
}
