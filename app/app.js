'use strict';

angular.module('monfusportsstoreApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
    ])
    .config(function ($routeProvider) {
        $routeProvider.when("/complete", {
            templateUrl: "app/main/thankyou.tmpl.html"
        });
        $routeProvider.when("/placeorder", {
            templateUrl: "app/order/placeorder.tmpl.html"
        });
        $routeProvider.when("/checkout", {
            templateUrl: "app/order/checkoutsummary.tmpl.html"
        });
        $routeProvider.when("/products", {
            templateUrl: "app/product/productlist.tmpl.html"
        });
        $routeProvider.when("/contact", {
            templateUrl: "app/contact/contact.tmpl.html"
        });
        $routeProvider.otherwise({
            templateUrl: "app/product/productlist.tmpl.html"
        });
    });
