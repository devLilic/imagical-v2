<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Article extends Model {

    use HasFactory;

    protected $fillable = ['title', 'tehno_title', 'slugs', 'intro', 'article_type', 'playlist_id', 'playlist_order', 'image_id'];

    public function playlist()
    {
        return $this->belongsTo(Playlist::class);
    }
}
