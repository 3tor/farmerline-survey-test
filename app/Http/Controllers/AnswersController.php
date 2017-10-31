<?php

namespace App\Http\Controllers;

use App\Answer;
use Illuminate\Http\Request;
use App\Questionnaire;

class AnswersController extends Controller
{
    public function store(Request $request)
    {
        $answers = request('formRes');
        foreach ($answers as $answer) {
            $surveyAns = new Answer;
            $surveyAns->quesId = $answer['quesId'];
            $surveyAns->quesAns = $answer['quesAns'];
            $surveyAns->survey_id = $answer['survey_id'];
        
            $surveyAns->save();
        }
        
        $answersMulti = request('multiResp');
        $check2 = count($answersMulti);
        // echo gettype($check2);
        if ($check2 == 0) {
            // echo "no multi ans";
            $msg['status'] = 200;
            $msg['message'] = 'Survey Completed. You may now proceed to view results';
            return json_encode($msg);
        } else {
            foreach ($answersMulti as $multi) {
                $surveyAns1 = new Answer;
                $surveyAns1->quesId = $multi['quesId'];
                $surveyAns1->quesAns = "multiple";
                $surveyAns1->survey_id = $multi['survey_id'];
                if ($multi['option']==1) {
                    $surveyAns1->option1 = $multi['quesAns'];
                } elseif ($multi['option']==2) {
                    $surveyAns1->option2 = $multi['quesAns'];
                } elseif ($multi['option']==3) {
                    $surveyAns1->option3 = $multi['quesAns'];
                } elseif ($multi['option']==4) {
                    $surveyAns1->option4 = $multi['quesAns'];
                }
            
                $surveyAns1->save();

                $msg['status'] = 200;
                $msg['message'] = 'Survey Completed. You may now proceed to view results';
                return json_encode($msg);
            }
        }
    }

    public function result($id)
    {
        $ans = Questionnaire::with('answers')->find($id)->answers;
        $ans2 = Questionnaire::with(['surveys','answers'])->find($id);
        return $ans2;
    }
}
