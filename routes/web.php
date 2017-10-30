<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('index');
});

Route::get('/survey/data', 'SurveysController@index');
Route::post('/survey/data', 'SurveysController@store');
Route::get('/survey/data/{id}', 'SurveysController@show');

Route::get('/survey/title', 'QuestionnairesController@index');
Route::post('/survey/title', 'QuestionnairesController@store');
