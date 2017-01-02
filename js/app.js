var config = {
    apiKey: "AIzaSyBsVzHAEPXrhcbo3qKcOqHadFEk58VhsI0",
    authDomain: "brilliant-torch-9248.firebaseapp.com",
    databaseURL: "https://brilliant-torch-9248.firebaseio.com",
    storageBucket: "brilliant-torch-9248.appspot.com",
    messagingSenderId: "936020393527"
};
firebase.initializeApp(config);

var app = angular.module('app', ['ngRoute', 'firebase']);
app.controller('ContactController', ['$scope', '$firebaseArray', function($scope, $firebaseArray) {
    $scope.text = "Works";
    var ref = firebase.database().ref("contacts");
    // create a synchronized array
    $scope.contacts = $firebaseArray(ref);
    console.info($scope.contacts);
    // add new items to the array
    // the message is automatically added to our Firebase database!
    $scope.addContact = function() {
        $scope.contacts.$add({
            name: $scope.named,
            phone: $scope.phone
        });
        $scope.named = '';
        $scope.phone = '';
    };
}]);