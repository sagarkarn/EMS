<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreEmployeeRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {

        return [
            "f_name" => 'required|string',
            "l_name" => 'required|string',
            "email" => 'required|email|unique:users,email',
            "country" => 'string|required',
            "start_date" => 'date|required',
            "job_title" => 'string|required',
            "team" => 'integer|required|exists:teams,id',
            'line_manager' => 'integer|required|exists:users,id',
            'currency' => 'integer|required|exists:currencies,id',
            'amount' => 'integer|required',
            'frequency' => 'required|integer|min:1|max:6',
            'salery_start_date' => 'date|required',
            'employment_type' => 'required|in:permanent,freelancer',
            'office' => 'required'
        ];
    }
}
