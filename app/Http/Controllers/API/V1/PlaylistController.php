<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;
use App\Http\Resources\V1\PlaylistResource;
use App\Models\Playlist;

class PlaylistController extends Controller
{
    public function index()
    {
        return PlaylistResource::collection(Playlist::latest()->take(4)->get());
    }

    public function show(Playlist $playlist){
        return new PlaylistResource($playlist);
    }
}
