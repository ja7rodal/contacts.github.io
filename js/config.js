app.config(function($routeProvider){
    $routeProvider
        .when('/', {
        templateUrl: "partial/list.html",
				controller: "ContactController"
    })
        .when('/new', {
        templateUrl: "partial/newContact.html",
				controller: "ContactController"
    })
        .when('/contact/:id', {
        templateUrl: "partial/showContact.html",
				controller: "showController"
    })
        .otherwise({
        redirectTo: '/'
    });
});

