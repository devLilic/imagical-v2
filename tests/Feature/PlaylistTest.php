<?php

namespace Tests\Feature;

use App\Http\Resources\V1\PlaylistResource;
use App\Models\Playlist;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Testing\Fluent\AssertableJson;
use Tests\TestCase;

class PlaylistTest extends TestCase {

    use RefreshDatabase;

    /** @test */
    public function registred_user_can_see_playlists()
    {
        $this->userInstance()
            ->get("/api/v1/playlists")
            ->assertOk();
    }

    /** @test */
    public function unregistred_user_cannot_see_playlists()
    {
        $this->get("/api/v1/playlists")
            ->assertStatus(302);
    }

    /** @test */
    public function get_playlists_from_api()
    {
        $playlist = Playlist::factory()->create();

        $this->userInstance()->getJson("/api/v1/playlists")
            ->assertJsonFragment([
                'title' => $playlist->title,
                'playDate' => $playlist->play_date,
            ])->assertJsonMissing([
                'created_at' => $playlist->created_at,
                'updated_at' => $playlist->updated_at
            ]);
    }

    /** @test */
    public function get_latest_playlists_from_api()
    {
        Playlist::factory()->count(15)->create();

        $this->userInstance()->getJson("/api/v1/playlists")
            ->assertJson(
                fn(AssertableJson $json) => $json->
                where('data', fn($data) => $data->count() === 5)
            );
    }

    /** @test */
    public function show_one_playlist()
    {
        $playlist = Playlist::factory()->create();
        $this->userInstance()
            ->get("/api/v1/playlists/{$playlist->id}")
            ->assertOk()
            ->assertJsonFragment([
                'title' => $playlist->title
            ])->assertJsonMissing([
                'created_at' => $playlist->created_at,
                'updated_at' => $playlist->updated_at
            ]);
    }

    /** @test */
    public function show_not_found_playlist()
    {
        $this->userInstance()
            ->get("/api/v1/playlists/1")
            ->assertJsonFragment([
                'data'=> [
                    'message' => 'Playlist not Found'
                ]
            ]);
    }

    /** @test */
    public function can_delete_a_playlist()
    {
        $playlist = Playlist::factory()->create();

        $this->userInstance()
            ->delete("/api/v1/playlists/{$playlist->id}");
    }

    protected function userInstance(): PlaylistTest
    {
        $user = User::factory()->create();

        return $this->actingAs($user);
    }
}
