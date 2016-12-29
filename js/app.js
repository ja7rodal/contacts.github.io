var app = angular.module('app', ['ngRoute']);
app.controller('ContactController', ['$scope', function($scope) {
    $scope.text = "Works";
}]);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl : "template/contact.html"
        })
    .when('/edit', {
        templateUrl: "template/edit.html"      
        })
    .when('/contact', {
        templateUrl: "template/contact.html"      
        })
    .otherwise({
        redirectTo: '/'
        });
}]);