'use strict';

angular.module("monfusportsstoreApp")
    .service("ProductService", function(ProductModel) {
    
            return{
                getProducts: function() {
                    return ProductModel.getProducts();
                }
     }
});