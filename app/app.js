'use strict';

angular.module('monfusportsstoreApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
    ])
    .constant('ENDPOINT_URI', 'http://localhost:61913')
    .config(function ($routeProvider) {
        $routeProvider.when("/complete", {
            templateUrl: "app/order/thankyou.tmpl.html"
        });
        $routeProvider.when("/placeorder", {
            templateUrl: "app/order/placeorder.tmpl.html"
        });
        $routeProvider.when("/cart", {
            templateUrl: "app/cart/cart.tmpl.html"
        });
        $routeProvider.when("/products", {
            templateUrl: "app/product/productlist.tmpl.html"
        });
        $routeProvider.when("/contact", {
            templateUrl: "app/contact/contact.tmpl.html"
        });
        $routeProvider.when("/admin", {
            templateUrl: "app/admin/adminLogin.tmpl.html"
        });
        $routeProvider.otherwise({
            templateUrl: "app/product/productlist.tmpl.html"
        });
    });
