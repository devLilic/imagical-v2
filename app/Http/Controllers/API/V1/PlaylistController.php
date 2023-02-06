<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;
use App\Http\Resources\V1\PlaylistResource;
use App\Models\Playlist;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class PlaylistController extends Controller {

    public function index(): AnonymousResourceCollection
    {
        return PlaylistResource::collection(Playlist::latest()->take(4)->get());
    }

    public function store()
    {
        // store new Playlist
    }

    public function show(Playlist $playlist): PlaylistResource
    {
        return new PlaylistResource($playlist->load('articles'));
    }

    public function destroy(Playlist $playlist): array
    {
        $playlist->delete();
        return ['data' => ['message' => 'Playlist was deleted']];
    }
}
