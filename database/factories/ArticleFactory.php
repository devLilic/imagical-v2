<?php

namespace Database\Factories;

use App\Models\Article;
use App\Models\Playlist;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Article>
 */
class ArticleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $playlist = Playlist::factory()->create();
        return [
            'tehno_title' => $this->faker->word,
            'article_type' => 'BETA',
            'playlist_id' => $playlist->id,
        ];
    }
}
