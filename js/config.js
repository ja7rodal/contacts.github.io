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
        .when('/contact', {
        templateUrl: "partial/showContact.html"      
    })
        .otherwise({
        redirectTo: '/'
    });
});

