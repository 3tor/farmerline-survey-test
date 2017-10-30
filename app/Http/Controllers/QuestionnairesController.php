<?php

namespace App\Http\Controllers;

use App\Questionnaire;

use Illuminate\Http\Request;

class QuestionnairesController extends Controller
{
    public function index()
    {
        return Questionnaire::all();
    }

    public function store()
    {
        $questionnaire = new Questionnaire;
        $questionnaire->title = request('title');

        $questionnaire->save();

        return 'Survey title added';
    }
}
