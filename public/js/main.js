var bookWishlistApp = angular.module('bookWishlistApp', [
  'ngRoute',
  'bookWishlistAppControllers',
  'bookWishlistAppServices'
]);

bookWishlistApp.config(['$routeProvider', function($routeProvider) {
    
    $routeProvider.
    when('/create_survey', {
        templateUrl: 'partials/createSurvey.html',
        controller: 'CreateSurveyController',
        controllerAs: 'create'
    }).
    when('/take_survey', {
        templateUrl: 'partials/takeSurvey.html',
        controller: 'TakeSurveyController',
        controllerAs: 'take'
    }).
     when('/view_survey_results', {
        templateUrl: 'partials/viewSurvey.html',
        controller: 'ViewSurveyController'
    }).
    when('/', {
        templateUrl: 'partials/index.html',
        controller: 'MainController'
    }).
    otherwise({
        redirectTo: '/'
    });

}]);