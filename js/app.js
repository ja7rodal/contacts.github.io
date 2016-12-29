var app = angular.module('app', ['ngRoute']);
app.controller('ContactController', ['$scope', function($scope) {
    $scope.text = "Works";
}]);