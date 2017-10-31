var surveyAppControllers = angular.module('surveyAppControllers', []);

surveyAppControllers.controller('CreateSurveyController', ['$scope', '$http', 'userService', 'toastr', function ($scope, $http, userService, toastr) {
    var vm = this;
    vm.surveyFormData = {};
    vm.createSurveySubmit = function (createSurveyForm) {
        var surveyData = {
            title_id: vm.surveyFormData.title,
            question: vm.surveyFormData.question,
            questionType: vm.surveyFormData.questionType,
            option1: vm.surveyFormData.option1 || null,
            option2: vm.surveyFormData.option2 || null,
            option3: vm.surveyFormData.option3 || null,
            option4: vm.surveyFormData.option4 || null
        }
        // console.log("survey data", surveyData);
        userService.submitSurvey(surveyData)
            .then(function (response) {
                // console.log(response);
                if (response.data.status == "200") {
                    toastr.success(response.data.message);
                }
            })
            .catch(function (error) {
                // console.log(error);
                toastr.error("Error inserting data. Please try again");
            })
    }


    vm.surveyTitleData = {};
    vm.createSurveyTitleSubmit = function (createSurveyTitleForm) {
        var titleData = {
            title: vm.surveyTitleData.title
        }
        userService.submitTitle(titleData)
            .then(function (response) {
                // console.log(response);
                if (response.data.status == "200") {
                    toastr.success(response.data.message);
                }
                vm.getTitle();
            })
            .catch(function (error) {
                // console.log(error);
                toastr.error("Error retrieving data. Please try again");
            })
    }


    vm.getTitle = function () {
        userService.getTitle()
            .then(function (response) {
                // console.log("titel", response);
                vm.titleList = response.data;
            })
            .catch(function (error) {
                // console.log("title error", error);
                toastr.error("Error retrieving data. Please try again");
            })
    }
    vm.getTitle();
}]);

surveyAppControllers.controller('TakeSurveyController', ['$scope', '$http', 'userService', 'toastr', function ($scope, $http, userService, toastr) {
    var vm = this;
    vm.takenSurveyData = {};
    $scope.multiAns = [];
    vm.custSpinnerShow = false;
    vm.addOption = function (check, opt, ans, optionNo) {
        if (check) {
            // add item
            // $scope.data.push(item);
            $scope.multiAns.push({
                option: optionNo,
                quesAns: ans,
                quesId: opt.id,
                survey_id: vm.title
            });
            // console.log($scope.multiAns);

        } else {
            for (var i = 0; i < $scope.multiAns.length; i++) {
                if ($scope.multiAns[i].quesId == opt.id) {
                    $scope.multiAns.splice(i, 1);
                }
            }
        }

    }
    vm.getSurveyQuestions = function (id) {
        vm.custSpinnerShow = true;
        userService.getSurveyData(id)
            .then(function (response) {
                // console.log(response);
                vm.surveyList = response.data;
                vm.custSpinnerShow = false;
            })
            .catch(function (error) {
                // console.log(error);
                vm.custSpinnerShow = false;
                toastr.error("Error retrieving data. Please try again");
            })
    }

    vm.takeSurveySubmit = function (takeSurveyForm) {
        var formRes = [];
        // console.log("len",Object.keys(vm.takenSurveyData).length);
        // for(var i=0 ; i < Object.keys(vm.takenSurveyData).length; i++) {
        //     formRes.push({
        //         quesId: vm.takenSurveyData[i][key],
        //         quesAns: vm.takenSurveyData[i][key]
        //     });
        //     // if($scope.multiAns[i].quesId == opt.id){
        //     //   $scope.multiAns.splice(i,1);
        //     // }
        // } 

        for (key in vm.takenSurveyData) {
            formRes.push({
                quesId: key,
                quesAns: vm.takenSurveyData[key],
                survey_id: vm.title
            });
        }

        // console.log("formres", formRes);
        // var surveyRes = vm.takenSurveyData;
        var surveyRes = {};
        surveyRes.multiResp = $scope.multiAns;
        surveyRes.formRes = formRes;
        // console.log("taken res obj", surveyRes);
        userService.submitAnswer(surveyRes)
            .then(function (response) {
                // console.log("complet survey response", response);
                if (response.data.status == "200") {
                    toastr.success(response.data.message);
                }
            })
            .catch(function (error) {
                // console.log("title error", error);
                toastr.success("Error completing survey");
            })
    }

    vm.getTitle = function () {
        userService.getTitle()
            .then(function (response) {
                // console.log("titel", response);
                vm.titleList = response.data;
            })
            .catch(function (error) {
                // console.log("title error", error);
                 toastr.error("Error retrieving data. Please try again");
            })
    }
    vm.getTitle();
}]);

surveyAppControllers.controller('ViewSurveyController', ['$scope', '$http', 'userService', 'toastr', function ($scope, $http, userService, toastr) {
    var vm = this;
    vm.custSpinnerShow = false;
    vm.getSurveyResults = function (id) {
        vm.custSpinnerShow = true;
        // console.log("id", id);
        userService.getSurveyResults(id)
            .then(function (response) {
                // console.log(response);
                vm.surveyResult = response.data;
                // console.log(vm.surveyResult);
                vm.survTitle = vm.surveyResult.title;
                // console.log(vm.survTitle);
                vm.custSpinnerShow = false;
            })
            .catch(function (error) {
                // console.log(error);
                vm.custSpinnerShow = false;
                toastr.error("Error retrieving data. Please try again");
            })
    }

    vm.getTitle = function () {
        userService.getTitle()
            .then(function (response) {
                // console.log("titel", response);
                vm.titleList = response.data;
            })
            .catch(function (error) {
                // console.log("title error", error);
            })
    }
    vm.getTitle();

}]);


surveyAppControllers.controller('MainController', ['$scope', '$http', '$location', function ($scope, $http, $location) {
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

