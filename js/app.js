var MovieApp = angular.module('MovieApp', ['ngRoute','MovieControllers']);

// ROUTING MVC Angular Application
MovieApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl' // home page controller
      }).
      when('/list_pages', {
        templateUrl: 'views/list.html',
        controller: 'ListCtrl' // list movies controller
      }).
      when('/movie/:id', {
        templateUrl: 'views/details.html',
        controller: 'DetailCtrl' // details page controller
      }).      
      otherwise({
        redirectTo: '/home'
      });
  }]);


