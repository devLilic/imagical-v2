<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Playlist extends Model {

    use HasFactory;

    protected $fillable = ['title', 'play_date'];

    public function articles()
    {
        return $this->hasMany(Article::class);
    }
}
