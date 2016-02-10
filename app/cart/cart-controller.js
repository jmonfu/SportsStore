'use strict';

angular.module("monfusportsstoreApp")

    .controller("cartCtrl", function($scope, CartService) {
    var ctrl = this;    
    
    ctrl.cartData = CartService.getCartProducts();
    
    $scope.total = function() {
        return CartService.getCartTotal();
    }
    
    $scope.addItem = function(item) {
        item.qty += 1;
        item.itemTotal = item.price * item.qty
    };

    $scope.removeItem = function(item) {
        item.qty = item.qty-1;
        CartService.removeFromReceipt(item.id);
    };
    
    $scope.remove = function(item) {
        CartService.removeWholeItemFromReceipt(item.id);
    };

});