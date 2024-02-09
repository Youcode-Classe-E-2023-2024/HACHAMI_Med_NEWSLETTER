<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Illuminate\Validation\ValidationException;


class RegisterRequest extends FormRequest
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
            'name'=>'string|min:6|max:45',
            'email' => 'required|email|unique:users',
            'password' => 'required|string|confirmed|min:6|max:255',
            'password_confirmation' => 'required|min:6'
        ];
    }

    public function messages()
    {
        return [
            'name.string'=>'Please enter a valid name.',
            'name.min'=>'Please enter a valid name  with a minimum length of 6 characters',
            'email.required' => 'The email field is required.',
            'email.email' => 'Please enter a valid email address.',
            'email.unique' => 'The email address is already in use.',
            'password.required' => 'The password field is required.',
            'password.string' => 'Please enter a valid password.',
            'password.min' => 'Please enter a valid password  with a minimum length of 6 characters',
            'password.confirmed' => 'The password confirmation does not match.',

        ];
    }
    protected function failedValidation($validator)
    {
        throw new ValidationException($validator, $this->redirector->to($this->getRedirectUrl())
            ->withInput($this->input())
            ->withErrors($validator, $this->errorBag));
    }
}
