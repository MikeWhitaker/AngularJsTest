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
        return $resource('/Data/testJson.json');

  });
