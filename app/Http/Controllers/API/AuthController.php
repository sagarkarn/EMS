<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(LoginRequest $request)
    {

        $email = $request->json('username');
        $password = $request->json('password');

        if (Auth::check()) {
            return response(['status' => 'success', 'message' => 'already logged in']);
        }

        $result = Auth::attempt(['email' => $email, 'password' => $password]);
        $user = Auth::user();
        if ($result) {
            $token = $user->createToken('app')->plainTextToken;
            return response(['status' => 'success', 'token' => $token]);
        } else {
            return response(['status' => 'failed']);
        }
    }
}
