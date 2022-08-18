<?php

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\CurrencyController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\OfficeController;
use App\Http\Controllers\TeamController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
| doing
*/


Route::post('/login', [AuthController::class, 'login']);


Route::middleware('auth:sanctum')->group(function () {
    Route::get("/user", function () {
        return Auth::user();
    });
    Route::get("/teams", [TeamController::class, 'index']);
    Route::get("/offices", [OfficeController::class, 'index']);
    Route::get("/currencies", [CurrencyController::class, 'index']);

    Route::post("/user/store", [EmployeeController::class, 'store']);
    Route::get("/users", [EmployeeController::class, 'index']);
});
