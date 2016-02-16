'use strict';

angular.module("monfusportsstoreApp")

    .constant("authUrl", "http://localhost:56322/api/login")
    .controller("mainCtrl", function($scope, CartService, MainService, AuthService, $location) {
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
        
        $scope.authenticate = function(user, pass) {
            if(AuthService.login(user,pass))
            {
                $scope.currentUser = AuthService.getCurrentUser();
                $location.path("/main");
            }
            else
            {
                $scope.authenticationError = "Your login credentials are not correct!";
            }
            
            // //authenticate users with database here
            // $http.post(authUrl, {
            //     username: user,
            //     password: pass
            // }).success(function(data) {
            //     $location.path("/main");
            // }).error(function(error) {
            //     $scope.authenticationError = error;
            // });
        }
        
});