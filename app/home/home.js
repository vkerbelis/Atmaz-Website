'use strict';

var app = angular.module('myApp.home', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  });
}]);

app.controller('HomeCtrl', ['$scope', function($scope) {

  $('.overlay').css('display', 'none');

  $scope.alert = function() {
    if($('.overlay').css('display') == 'none') {
      $('.overlay').fadeIn('slow').delay(2000).fadeOut('slow');
    }
  }
}]);
