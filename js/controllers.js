angular.module('app').controller('ContactController', ['$scope', '$location', 'contactFactory', function ($scope, $location, contactFactory) {
	$scope.contacts = contactFactory.list();
	
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

	$scope.contact = contactFactory.contact($routeParams.id);
	
	$scope.contactDel = function() {
		contactFactory.delete($routeParams.id);
		$location.path('/');
		};

}]);


angular.module('app').controller('editController', ['$scope', 'contactFactory', '$location', '$routeParams', function ($scope, contactFactory, $location, $routeParams) {
	var id = $routeParams.id;
	
	var contacts = contactFactory.list();
	$scope.contact = contactFactory.contact($routeParams.id);


	$scope.editContact = function (){
		//contacts.$save($scope.contact);
		contactFactory.edit($scope.contact);
		$location.path("/contact/"+id);
	};

}]);

