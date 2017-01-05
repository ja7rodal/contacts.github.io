angular.module('app').controller('ContactController', ['$scope', '$location', '$firebaseArray', function ($scope, $location, $firebaseArray) {
	var ref = firebase.database().ref("contacts").orderByChild("name");
	// create a synchronized array
	$scope.contacts = $firebaseArray(ref);
	//console.info($scope.contacts);
	
	//Link to contact
	$scope.link_contact = function(location){
		$location.path('/contact/'+location);
		
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

angular.module('app').controller('showController', ['$scope', '$firebaseArray', '$location', '$routeParams', function ($scope, $firebaseArray, $location, $routeParams) {
	
	var id = $routeParams.id;
	$scope.id =  id;
	var refe = firebase.database().ref("contacts");
	// create a synchronized array
	var contacts = $firebaseArray(refe);
	
	contacts.$loaded()
    .then(function (contacts) 
    {  
			$scope.contact = contacts.$getRecord(id); 
    });
	
}]);
