'use-strict';

angular.module('monfusportsstoreApp')
    .controller("productCtrl", function($scope, ProductService, CartService, MainService) {
        var ctrl = this;
        
        ctrl.products = ProductService.getProducts();
        
        $scope.addProductToCart = function(product) {
            CartService.addProductToCart(product);
            MainService.totalCartItems(CartService.getCartTotalItems());
        };
        
    })