var app = angular.module('mainApp', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/views/home.html',
        controller: 'mainController'
      })
      .when('/administration', {
        templateUrl: '/views/administration.html',
        controller: 'mainController'
      })
      .when('/mission', {
        templateUrl: '/views/mission.html',
        controller: 'mainController'
      })
      .when('/events', {
        templateUrl: '/views/events.html',
        controller: 'mainController'
      })
      .when('/meetings', {
        templateUrl: '/views/meetings.html',
        controller: 'mainController'
      })
      .when('/membership', {
        templateUrl: '/views/membership.html',
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
