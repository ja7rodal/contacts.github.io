app.config(function($routeProvider){
    $routeProvider
        .when('/', {
        templateUrl: "partial/list.html",
				controller: "ContactController"
    })
        .when('/new', {
        templateUrl: "partial/newContact.html",
				controller: "addController"
    })
        .when('/contact/:id', {
        templateUrl: "partial/showContact.html",
				controller: "showController"
    })
		.when('/edit/:id', {
        templateUrl: "partial/editContact.html",
				controller: "editController"
    })
        .otherwise({
        redirectTo: '/'
    });
});

