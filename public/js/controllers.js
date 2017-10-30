var bookWishlistAppControllers = angular.module('bookWishlistAppControllers', []);

bookWishlistAppControllers.controller('CreateSurveyController', ['$scope', '$http', 'userService', function ($scope, $http, userService) {
    var vm = this;
    vm.surveyFormData = {};
    vm.createSurveySubmit = function(createSurveyForm) {
        var surveyData = {
            title_id: vm.surveyFormData.title,
            question: vm.surveyFormData.question,
            questionType: vm.surveyFormData.questionType,
            option1: vm.surveyFormData.option1 || null,
            option2: vm.surveyFormData.option2 || null,
            option3: vm.surveyFormData.option3 || null,
            option4: vm.surveyFormData.option4 || null
        }
        console.log("survey data", surveyData);
        userService.submitSurvey(surveyData)
            .then(function(response){
                console.log(response);
            })
            .catch(function(error){
                console.log(error);
            })
    }


    vm.surveyTitleData = {};
    vm.createSurveyTitleSubmit = function(createSurveyTitleForm) {
        var titleData = {
            title: vm.surveyTitleData.title
        }
        userService.submitTitle(titleData)
            .then(function(response){
                console.log(response);
                vm.getTitle();
            })
            .catch(function(error){
                console.log(error);
            })
    }


    vm.getTitle = function() {
        userService.getTitle()
            .then(function(response){
                console.log("titel",response);
                vm.titleList = response.data;
            })
            .catch(function(error){
                console.log("title error",error);
            })
    }
    vm.getTitle();
}]);

bookWishlistAppControllers.controller('TakeSurveyController', ['$scope', '$http', 'userService', function ($scope, $http, userService) {
    var vm = this;
    vm.takenSurveyData = {};
    // vm.getSurveyData = function() {
    //     console.log("we are in take in");
    //     userService.getSurveyData()
    //         .then(function(response){
    //             console.log(response);
    //             vm.surveyList = response.data;
    //         })
    //         .catch(function(error){
    //             console.log(error);
    //         })
    // }
    // vm.getSurveyData();
    vm.getSurveyQuestions = function (id) {
        console.log("id",id);
         userService.getSurveyData(id)
            .then(function(response){
                console.log(response);
                vm.surveyList = response.data;
            })
            .catch(function(error){
                console.log(error);
            })
    }

    vm.takeSurveySubmit = function(takeSurveyForm) {
        var surveyRes = vm.takenSurveyData;
        console.log("taken res",surveyRes);
    }

    vm.getTitle = function() {
        userService.getTitle()
            .then(function(response){
                console.log("titel",response);
                vm.titleList = response.data;
            })
            .catch(function(error){
                console.log("title error",error);
            })
    }
    vm.getTitle();
}]);

bookWishlistAppControllers.controller('ViewSurveyController', ['$scope', '$http', function ($scope, $http) {

}]);


bookWishlistAppControllers.controller('MainController', ['$scope', '$http', '$location', function ($scope, $http, $location) {
    // $scope.message = 'Welcome.';
    $scope.goToCreateSurvey = function () {
        $location.path('/create_survey');
    }

    $scope.goToTakeSurvey = function () {
         $location.path('/take_survey');
    }

    $scope.goToViewSurvey = function () {
         $location.path('/view_survey_results');
    }

}]);

