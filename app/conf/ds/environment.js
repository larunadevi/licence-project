'use strict';

/**
 * @ngdoc overview
 * @name dashboardApp
 * @description
 * # dashboardApp
 *
 * Main module of the application.
 */
angular
  .module('dashboardApp')
  .run(function ($rootScope) {
    $rootScope.liveHost = 'https://socure-dashboard-ds.us-east-1.elasticbeanstalk.com/';
    $rootScope.apiarayHost = 'http://private-c4f6c-testapis3.apiary-mock.com';
  });

