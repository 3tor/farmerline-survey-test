<?php

namespace App\Http\Controllers;

use App\Survey;
use App\Questionnaire;

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

        $msg['status'] = 200;
        $msg['message'] = 'Question added';
        return json_encode($msg);
    }

    public function show($id)
    {
        // echo $id;
        // $surveyResult = Questionnaire::findorFail($id);
        // $surveyResult = Survey::findorFail($id);
        // print_r($surveyResult);
        // dd($surveyResult);
        // $questions = $surveyResult->Survey;
        // $res = array();
        // $res[] = $surveyResult;
        // return json_encode($res); 
        // return $questions;
        // return $surveyResult;
        $ques = Questionnaire::with('surveys')->find($id)->surveys;
        return $ques;
        // App\Post::find(1)->comments
        
    }
}
