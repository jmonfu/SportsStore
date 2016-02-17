'use-strict';

angular.module('monfusportsstoreApp')
    .controller("productCtrl", function($scope, ProductService, CartService, MainService) {

        var vm = this;
        vm.products = [];
        
        vm.getProducts = function(){
            ProductService.getProducts()
                .then(function(data) {
                    vm.products = data;
                })
                .catch(function(data, status) {
                    console.error('Error Retrieving Products', status);
                })
                .finally(function() {
                    console.log("finally finished");
                });        
        };
        
        $scope.addProductToCart = function(product) {
            CartService.addProductToCart(product);
            MainService.getTotalCartItems();
        };
        
        vm.getProducts();
    })