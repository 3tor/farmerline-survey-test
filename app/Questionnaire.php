<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
// use App\Questionnaire;

class Questionnaire extends Model
{
    protected $fillable = ['title'];

    // protected $table = 'surveys';

    public function surveys() {
        return $this->hasMany('App\Survey', 'title_id');
        // return $this->hasMany('App\Survey', 'title_id');
    }

    public function answers() {
        return $this->hasMany('App\Answer', 'survey_id');
        // return $this->hasMany('App\Survey', 'title_id');
    }
}
