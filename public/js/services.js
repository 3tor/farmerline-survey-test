var bookWishlistAppServices = angular.module('bookWishlistAppServices', []);

bookWishlistAppServices.factory('userService', ['$http', function($http) {

    return {
          submitSurvey: function (data) {
            return $http({
                method: 'POST',
                url: 'http://localhost:8000/survey/data',
                data: $.param(data),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            })
        },
        getSurveyData: function () {
             return $http({
                method: 'GET',
                url: 'http://localhost:8000/survey/data'
            })
        }
    }

}]);