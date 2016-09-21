'use strict';

/**
 * @ngdoc overview
 * @name yapp
 * @description
 * # yapp
 *
 * Main module of the application.
 */
angular
  .module('yapp', [
    'ui.router',
    'ngAnimate'
  ])
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when('/dashboard', '/dashboard/overview');
    $urlRouterProvider.otherwise('/dashboard', '/dashboard/overview');

    $stateProvider
      .state('base', {
        abstract: true,
        url: '',
        templateUrl: 'views/base.html'
      })
     /* .state('login', {
          url: '/login',
          parent: 'base',
          templateUrl: 'views/login.html',
          controller: 'LoginCtrl'
        })*/
        .state('dashboard', {
          url: '/dashboard',
          parent: 'base',
          templateUrl: 'views/dashboard.html',
          controller: 'DashboardCtrl'
        })
          .state('overview', {
            url: '/overview',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/overview.html'
          })
          .state('reports', {
            url: '/reports',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/reports.html'
          })
          .state('tut1', {
            url: '/tut1',
            parent: 'dashboard',
            templateUrl: 'views/tut1.html'
          })
           .state('tut2', {
            url: '/tut2',
            parent: 'dashboard',
            templateUrl: 'views/tut2.html'
          })
           .state('tut3', {
            url: '/tut3',
            parent: 'dashboard',
            templateUrl: 'views/tut3.html'
          })
            .state('tut4', {
            url: '/tut4',
            parent: 'dashboard',
            templateUrl: 'views/tut4.html'
          })
             .state('loadtesting', {
            url: '/loadtesting',
            parent: 'dashboard',
            templateUrl: 'views/tut5.html'
          });

  });
