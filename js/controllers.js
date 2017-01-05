angular.module('app').controller('ContactController', ['$scope', '$location', '$firebaseArray', '$routeParams', function ($scope, $location, $firebaseArray, $routeParams) {
	$scope.text = "Works";
	var ref = firebase.database().ref("contacts");
	// create a synchronized array
	$scope.contacts = $firebaseArray(ref);
	console.info($scope.contacts);
	
	//Link to contact
	$scope.id = $routeParams.id;
	$scope.link_contact = function(location){
		$location.path('/contact:'+location);
		
	};
	
	
	// add new items to the array
	// the message is automatically added to our Firebase database!
	$scope.addContact = function () {
		$scope.contacts.$add({
			name: $scope.named,
			phone: $scope.phone,
			email: $scope.email,
			notes: $scope.notes
		});
		$scope.named = '';
		$scope.phone = '';
		$scope.email = '';
		$scope.notes = '';
		alert('nuevo contact');
		$location.path('/');
	};
}]);
