<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Answer extends Model
{
    //
    protected $table = "survey_answers";
    protected $fillable = ['survey_id', 'quesId', 'quesAns', 'option1', 'option2', 'option3', 'option4'];

    public function questions()
    {
        return $this->belongsTo('App\Survey');
    }

    public function survey()
    {
        return $this->belongsTo('App\Questionnaire');
    }
}
