<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Survey extends Model
{
    protected $fillable = ['question', 'questionType', 'option1', 'option2', 'option3', 'option4'];
}
