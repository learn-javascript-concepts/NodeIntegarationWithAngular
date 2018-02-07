(function(angular) {

    var appModule = angular.module("appModule", ["ngRoute"]);

    appModule.controller("mainController", function() {
        $scope.authorName = "Mayank Gupta"
    });

    appModule.config(function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider.when("/", {
            templateUrl : "partials/index.vash"
        });
    });

})(window.angular)