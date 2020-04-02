var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/views/about.html',
        controller: 'controller'
      })
      .when('/projects', {
        templateUrl: '/views/projects.html',
        controller: 'controller'
      })
      .when('/404', {
        templateUrl: '/views/404.html',
        controller: 'controller'
      })
      .otherwise({
        redirectTo: '/404'
      });
    $locationProvider.html5Mode(true);
  });

app.controller('controller', function($location, $route){
   //console.log($location.path());
});
