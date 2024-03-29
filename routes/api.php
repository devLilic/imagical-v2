<?php

use App\Http\Controllers\API\V1\PlaylistController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request)
{
    return $request->user();
});


Route::middleware('auth:sanctum')->prefix('v1')->group(function ()
{
    Route::resource('playlists', PlaylistController::class)
        ->only(['index', 'destroy'])
        ->missing(fn (Request $request) => response()->json(['data' => ['message' => "Playlist not Found"]]));
});
