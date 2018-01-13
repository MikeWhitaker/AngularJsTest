'use strict';

/**
 * @ngdoc service
 * @name childListApp.familyservice
 * @description
 * # familyservice
 * Service in the childListApp.
 */
angular.module('childListApp')
    .service('familyservice', function ($resource) {
        // AngularJS will instantiate a singleton by calling "new" on this function
        return $resource('/Data/familydata.json');
        

      //  this.getDad = function () {
      //    //Should return just the top level elements of the json data.
      //    return 'mike';

      //};

      //var data = $resource('/Data/familydata.json');
      
      //this.getData = function () {

      //    var debug = data.query();
      //    console.log('data: ' + data);
      //    //return data.query();
      //    return debug;
          
      //};

  });
