'use-strict';

angular.module('monfusportsstoreApp')
    .controller("productCtrl", function(ProductService) {
        var ctrl = this;
        
        ctrl.products = ProductService.getProducts();
    })