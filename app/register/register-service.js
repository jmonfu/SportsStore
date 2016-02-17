'use strict';

angular.module("monfusportsstoreApp")
    .service("RegisterService", function($location,UserService){
        return{
            register: function(user) {
                UserService.createUser(user)
                    .then(function (response) {
                        if (response.success) {
                            console.log('Registration successful');
                            $location.path('/registerSuccess');
                        } else {
                            console.log('Registration Error!');
                        }
                    });

            }
        }    
    });