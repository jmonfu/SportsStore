'use strict';

angular.module("monfusportsstoreApp")

    .controller("mainCtrl", function($scope, CartService, MainService, AuthService) {
        var ctrl = this;    
                
        $scope.getCurrentUser = function() {
            var currentUser = AuthService.getCurrentUser();
            if(currentUser != ""){
                return currentUser;
            }
            else{
                return " ";                
            }    
        }

        $scope.getTotalCartItems = function() {
            return MainService.getTotalCartItems();
        }

        $scope.isLoggedIn = function() {
            return AuthService.isLoggedIn();
        }           
        
        $scope.logout = function() {
            AuthService.logOut();
        }
});