<?php

namespace App\Http\Controllers;

use App\Survey;

use Illuminate\Http\Request;

class SurveysController extends Controller
{
    public function index()
    {
        return Survey::all();
    }

    public function store()
    {
        $survey = new Survey;
        $survey->question = request('question');
        $survey->questionType = request('questionType');
        $survey->title_id = request('title_id');
        $survey->option1 = request('option1');
        $survey->option2 = request('option2');
        $survey->option3 = request('option3');
        $survey->option4 = request('option4');

        $survey->save();

        return 'Question added';
    }

    public function show($id)
    {
        return Survey::find($id);
    }
}
