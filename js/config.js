app.config(function($routeProvider){
    $routeProvider
        .when('/', {
        templateUrl: "partial/list.html"
    })
        .when('/new', {
        templateUrl: "partial/newContact.html"      
    })
        .when('/contact', {
        templateUrl: "partial/showContact.html"      
    })
        .otherwise({
        redirectTo: '/'
    });
});

