var myApp = angular.module("myApp", ['ngRoute']);

myApp.config(function ($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })
    
    $routeProvider
    .when('/about', {
        templateUrl: 'pages/about.html',
        controller: 'secondController'
    })
    
});



myApp.controller('mainController', ['$scope', '$route', '$routeParams', '$location', '$log', function($scope, $route, $routeParams, $location, $log) {


    
}]);

myApp.controller('secondController', ['$scope', '$route', '$routeParams', '$location', '$log', function($scope, $route, $routeParams, $location, $log) {


    
}]);

//myApp.config(['$routeProvider', '$locationProvider',
//  function($routeProvider, $locationProvider) { 
//      
//    $routeProvider
//        
//    .when('/', {
//        templateUrl: 'pages/main.html',
//        controller: 'mainController'
//      })
//    
//    .when('/about', {
//        templateUrl: 'pages/about.html',
//        controller: 'secondController' 
//      })
//      
//    otherwise( {
//          redirecTo : '/'
//      })
//
//    $locationProvider.html5Mode({enabled: true, requireBase: false});
//}]);