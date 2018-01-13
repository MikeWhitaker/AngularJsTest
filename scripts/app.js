'use strict';

/**
 * @ngdoc overview
 * @name childListApp
 * @description
 * # childListApp
 *
 * Main module of the application.
 */
angular
  .module('childListApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/MyFirstController', {
        templateUrl: 'views/MyFirstController.html',
        controller: 'MyFirstController'
      })
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/FamilyData', {
        templateUrl: 'views/FamilyData.html',
        controller: 'FamilyData'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
