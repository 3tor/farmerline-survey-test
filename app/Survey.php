<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
// use App\Questionnaire;

class Survey extends Model
{
    protected $fillable = ['question', 'title_id', 'questionType', 'option1', 'option2', 'option3', 'option4'];

    // function survey() {
    //     return $this->belongsTo('Questionnaire', 'id');
    // }

    public function answers()
    {
        return $this->hasMany('App\Answer');
    }
}
