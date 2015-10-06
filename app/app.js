angular.module('myApp', ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'components/home-index/home-index.html',
        controller: 'HomeIndexController',
        controllerAs: 'homeIndex'
      })
      .when('/hello', {
        template: 'Hello World',
      });
  });
