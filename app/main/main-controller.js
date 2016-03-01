'use strict';

angular.module("monfusportsstoreApp")

    .constant("authUrl", "http://localhost:56322/api/login")
    .controller("mainCtrl", function($scope, CartService, MainService, 
        AuthService, $location) {
        var vm = this;    

        (function initController() {
            // reset login status
            AuthService.clearCredentials();
        })();

                
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
        
        $scope.authenticate = function(user, pass) {
            AuthService.login(user, pass, function() {
                // if (response.success) {
                //     AuthService.SetCredentials(user, pass);
                //     $location.path('/');
                // } else {
                //     //display error message
                // }
            })                
        }
        
});

