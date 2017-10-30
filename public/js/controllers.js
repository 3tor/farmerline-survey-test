var bookWishlistAppControllers = angular.module('bookWishlistAppControllers', []);

bookWishlistAppControllers.controller('CreateSurveyController', ['$scope', '$http', 'userService', function ($scope, $http, userService) {
    var vm = this;
    vm.surveyFormData = {};
    vm.createSurveySubmit = function(createSurveyForm) {
        var surveyData = {
            question: vm.surveyFormData.question,
            questionType: vm.surveyFormData.questionType,
            option1: vm.surveyFormData.option1,
            option2: vm.surveyFormData.option2,
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
}]);

bookWishlistAppControllers.controller('TakeSurveyController', ['$scope', '$http', 'userService', function ($scope, $http, userService) {
    var vm = this;
    vm.getSurveyData = function() {
        console.log("we are in take in");
        userService.getSurveyData()
            .then(function(response){
                console.log(response);
            })
            .catch(function(error){
                console.log(error);
            })
    }
    vm.getSurveyData();
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

