app.config(function($routeProvider){
    $routeProvider
        .when('/', {
        templateUrl: "views/listContact.html",
				controller: "ContactController"
    })
        .when('/new', {
        templateUrl: "views/newContact.html",
				controller: "addController"
    })
        .when('/contact/:id', {
        templateUrl: "views/showContact.html",
				controller: "showController"
    })
		.when('/edit/:id', {
        templateUrl: "views/editContact.html",
				controller: "editController"
    })
        .otherwise({
        redirectTo: '/'
    });
});

