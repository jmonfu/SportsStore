'use strict';

angular.module("monfusportsstoreApp")
    .service("CartService", function(){
        
        var cartData = [];
        
        return {
            addProductToCart: function(product) {
                var alreadyAdded = false;
                for(var i=0; i < cartData.length; i++)
                {
                    if (cartData[i].id == product.id) {
                        cartData[i].qty += 1;
                        cartData[i].count++;
                        alreadyAdded = true;
                        break;
                    }
                }
                if (!alreadyAdded) {
                    cartData.push({
                        id: product.id, image: product.image, name: product.name, qty: 1, price: product.price
                    });
                }
            },
            
            removeFromReceipt: function(id) {
                for (var i = 0; i < cartData.length; i++) {
                    if (cartData[i].id == id) {
                        if(cartData[i].qty > 0) {
                            cartData[i].qty - 1;
                        }
                        else{
                            cartData.splice(i, 1);
                        }
                    }
                }
            },

            removeWholeItemFromReceipt: function(id) {
                for (var i = 0; i < cartData.length; i++) {
                    if (cartData[i].id == id) {
                        cartData.splice(i, 1);
                    }
                }
            },
            
            getCartProducts: function() {
                return cartData;
            },
            
            getCartTotalItems: function() {
                var total = 0;
                for (var i = 0; i < cartData.length; i++) {
                    total += (cartData[i].qty);
                }
                return total;
            },

            getCartTotal: function() {
                    var total = 0;
                    for (var i = 0; i < cartData.length; i++) {
                        total += (cartData[i].price * cartData[i].qty);
                    }
                    return total;
                }
            
        }

    });