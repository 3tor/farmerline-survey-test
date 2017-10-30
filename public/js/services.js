var bookWishlistAppServices = angular.module('bookWishlistAppServices', []);

bookWishlistAppServices.factory('userService', ['$http', function($http) {

    return {
          submitSurvey: function (data) {
            return $http({
                method: 'POST',
                url: '/survey/data',
                data: $.param(data),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            })
        },
        getSurveyData: function (id) {
             return $http({
                method: 'GET',
                url: '/survey/data/' + id
            })
        },
        submitTitle: function (data) {
            return $http({
                method: 'POST',
                url: '/survey/title',
                data: $.param(data),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }) 
        },
        getTitle: function() {
            return $http({
                method: 'GET',
                url: '/survey/title'
            })
        }
    }

}]);