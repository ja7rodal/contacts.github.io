app.config(function($routeProvider){
    $routeProvider
        .when('/', {
        templateUrl: "partial/list.html"
    })
        .when('/edit', {
        templateUrl: "partial/editContact.html"      
    })
        .when('/contact', {
        templateUrl: "partial/showContact.html"      
    })
        .otherwise({
        redirectTo: '/'
    });
});

