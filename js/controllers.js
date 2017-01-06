app.controller('ContactController', ['$scope', '$location', 'contactFactory', function ($scope, $location, contactFactory) {
	$scope.contacts = contactFactory.list();
	
	// mask for phone
	$scope.phoneMask = "+99-999-9999";

	//Link to contact
	$scope.link_contact = function(location){
	$location.path('/contact/' + location);
	};

}]);


// Controlador para crear nuevos contactos
//---------------------------------------------
app.controller('addController', ['$scope', 'contactFactory', '$location', function ($scope, contactFactory, $location){
	
	$scope.contact = {};

	$scope.addContact = function () {
		contactFactory.create($scope.contact);
		$scope.contact = {};
		$location.path('/');
	};
	
}]);

// Controlador para mostrar o eliminar un contacto
//------------------------------------------
app.controller('showController', ['$scope', 'contactFactory', '$location', '$routeParams', function ($scope, contactFactory, $location, $routeParams) {

	$scope.contact = contactFactory.contact($routeParams.id);
	$scope.contactDel = function() {
		contactFactory.delete($routeParams.id);
		$location.path('/');
		};

}]);

// Controlador para editar un contacto
//-----------------------------------------
app.controller('editController', ['$scope', 'contactFactory', '$location', '$routeParams', function ($scope, contactFactory, $location, $routeParams) {
	var id = $routeParams.id;
	$scope.contact = contactFactory.contact(id);
	$scope.editContact = function (){
		contactFactory.edit($scope.contact);
		$location.path("/contact/"+id);
	};

}]);

