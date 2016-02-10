'use strict';

angular.module("monfusportsstoreApp")
    .service("MainService", function(){
        return {
            totalCartItems: function(totalItems) {
                var t = 0;
                t = totalItems
                return t;
            }
            
        }        
});