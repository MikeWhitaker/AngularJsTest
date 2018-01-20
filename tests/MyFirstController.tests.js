/// <reference path="../bower_components/angular/angular.js" />
/// <reference path="../bower_components/angular-mocks/angular-mocks.js" />
/// <reference path="../scripts/jasmine.js" />
/// <reference path="../bower_components/angular-animate/angular-animate.js" />
/// <reference path="../bower_components/angular-cookies/angular-cookies.js" />
/// <reference path="../bower_components/angular-resource/angular-resource.js" />
/// <reference path="../bower_components/angular-route/angular-route.js" />
/// <reference path="../bower_components/angular-sanitize/angular-sanitize.js" />
/// <reference path="../bower_components/angular-touch/angular-touch.js" />
/// <reference path="../scripts/app.js" />
/// <reference path="../scripts/controllers/MyFirstController.js" />



describe("MyFirstController --> ", function () {

    var element;
    var myScope;

    beforeEach(module('childListApp'));
    beforeEach(inject(function (_$controller_, _$rootScope_) {
        $controller = _$controller_;
        $scope = _$rootScope_.$new();
        //myScope = $scope;
    }));

    it("should be able to add 2 plus 2", function () {

        //myScope.add(2);
        expect($scope).toBeDefined();
    });
});
