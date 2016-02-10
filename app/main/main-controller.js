'use strict';

angular.module("monfusportsstoreApp")

    .controller("mainCtrl", function($scope, CartService, MainService) {
        var ctrl = this;    
        
        ctrl.getTotalCartItems = function() {
            return 0;
            //return MainService.totaCartItems();
        }        
});