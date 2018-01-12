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
      var getDads = function () {
          //Should return just the top level elements of the json data.
          return {



          };

      };

      var getData = function () {
          var resource = $resource('/data/familydata.json', { "getAll": { method: "GET", isArray: true } });
          return {
              getAllData: function () {
                  return resource.query();
              }
          }
      };

  });
