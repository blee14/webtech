var myApp = angular.module("myApp", ['ngRoute']);

myApp.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) { 
      
    $routeProvider
        
    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
      })
    
    .when('/about', {
        templateUrl: 'pages/about.html',
        controller: 'secondController' 
      })
      
    otherwise( {
          redirecTo : '/'
      })

    $locationProvider.html5Mode({enabled: true, requireBase: false});
}]);

myApp.controller('mainController', ['$scope', '$route', '$routeParams', '$location', '$log', function($scope, $route, $routeParams, $location, $log) {


    
}]);

myApp.controller('secondController', ['$scope', '$route', '$routeParams', '$location', '$log', function($scope, $route, $routeParams, $location, $log) {

    log.info(location.path());
    
}]);
