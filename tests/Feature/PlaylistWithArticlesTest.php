<?php

namespace Tests\Feature;

use App\Models\Article;
use App\Models\Playlist;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class PlaylistWithArticlesTest extends TestCase {

    use RefreshDatabase;

    /** @test */
    public function playlist_contains_article()
    {
        $playlist = Playlist::factory()->create();
        Article::factory()->create(['playlist_id' => $playlist->id]);

        $this->userInstance()
            ->get("/playlists/{$playlist->id}/")
            ->assertSee($playlist->title);
    }

    protected function userInstance(): PlaylistWithArticlesTest
    {
        $user = User::factory()->create();

        return $this->actingAs($user);
    }
}
