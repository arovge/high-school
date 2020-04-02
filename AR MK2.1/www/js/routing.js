var app = angular.module('mainApp', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/views/about.html',
        controller: 'mainController'
      })
      .when('/projects', {
        templateUrl: '/views/projects.html',
        controller: 'mainController'
      })
      .when('/projects/calculator', {
        templateUrl: '/views/calculator.html',
        controller: 'mainController'
      })
      .when('/contact', {
        templateUrl: '/views/contact.html',
        controller: 'mainController'
      })
      .when('/404', {
        templateUrl: '/views/404.html',
        controller: 'mainController'
      })
      .otherwise({
        redirectTo: '/404'
      });
    $locationProvider.html5Mode(true);
  });

app.controller('mainController', function($location, $route){
   //console.log($location.path());
});
