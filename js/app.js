var app = angular.module('app', ['ngRoute']);
app.controller('ContactController', ['$scope', function($scope) {
    $scope.text = "Works";
}]);

app.config(function($routeProvider){
    $routeProvider
    .when("/", {
        templateUrl : "index.html"
        })
    .when("/edit", {
        templateUrl: "template/edit.html"      
        })
    .otherwise({
    template : "contact.html"
        });
});

