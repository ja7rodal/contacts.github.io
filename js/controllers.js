angular.module('app').controller('ContactController', ['$scope', '$location', 'contactFactory', function ($scope, $location, contactFactory) {
	$scope.contacts = contactFactory.list();
	
	$scope.path = "";
	// mask for phone
	$scope.phoneMask = "+99-999-9999";

	//Link to contact
	$scope.link_contact = function(location){
		$location.path('/contact/' + location);
	};

	$scope.notes = "";
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
		$location.path('/');
	};
}]);

angular.module('app').controller('showController', ['$scope', 'contactFactory', '$location', '$routeParams', function ($scope, contactFactory, $location, $routeParams) {

	var id = $routeParams.id;
	
	var contacts = contactFactory.list();
	$scope.delete = function() {

		contacts.$loaded()
			.then(function (contacts) {  
				$scope.contact = contacts.$getRecord(id); 
				}
			);

		var d =confirm("Estas seguro de eleminar este contacto?");
		if (d == true ){ 
			contacts.$remove($scope.contact);
			//contacts.$remove(id);
			$location.path('/');
			}
	};

}]);


angular.module('app').controller('editController', ['$scope', 'contactFactory', '$location', '$routeParams', function ($scope, contactFactory, $location, $routeParams) {
	var id = $routeParams.id;
	
	var contacts = contactFactory.list();

	contacts.$loaded()
		.then(function (contacts) 
					{  
		$scope.contact = contacts.$getRecord(id); 
	});

	$scope.editContact = function (){
		contacts.$save($scope.contact);
		$location.path("/contact/"+id);
	};

}]);

