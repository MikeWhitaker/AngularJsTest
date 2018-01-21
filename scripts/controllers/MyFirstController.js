'use strict';

/**
 * @ngdoc function
 * @name childListApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the childListApp
 */
angular.module('childListApp')
    .controller('MyFirstController', function (familyservice) {

      var vm = this;
      var templistFamily = familyservice.query();
      templistFamily.$promise.then(function (result) {
          vm.listFamily = result;

      });

      console.log('listFamily: ' + vm.listFamily);
      //this.awesomeThings = [
      //    'HTML5 Boilerplate',
      //    'AngularJS',
      //    'Karma'
      //];
  });
