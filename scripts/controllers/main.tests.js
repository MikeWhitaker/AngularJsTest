'use strict';

describe('MainCtrl ->', function () {

    var $controllerConstructor, $scope, mockFamilyService;

    


    //beforeEach(module("childListApp"));
    
    beforeEach(inject(function ($controller,$rootScope) {
        $controllerConstructor = $controller;
        $scope = $rootScope.$new();
    }));



    it('should get the data from the family service en put it on the scope.', function () {
              
        var mockFamilyService = {};

        var ctrl = $controllerConstructor("MainCtrl",
            {
                '$scope': $scope,
                'familyservice': mockFamilyService
            }
        );

        expect(scope.data).toBe(mockFamilyService);


    });

});

