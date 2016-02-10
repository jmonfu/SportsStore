'use strict';

angular.module("monfusportsstoreApp")
    .service("MainService", function(CartService){
        return {
            getTotalCartItems: function() {
                return CartService.getCartTotalItems();
            }
            
        }        
});