'use strict';

angular.module("monfusportsstoreApp")
    .factory("UserService", function($http, ENDPOINT_URI){
        
        var url = ENDPOINT_URI + '/api/users/';

        return {
            
            getAllUsers: function() {
                return $http.get(url).then(handleSuccess, handleError('Error getting all users'));
            },

            createUser: function(user) {
                console.log(user);
                return $http.post(url, user).then(handleSuccess, handleError('Error creating user'));
            }
        }        
        
        function handleSuccess(res) {
            return res.data;
        }

        function handleError(error) {
            return function () {
                return { success: false, message: error };
            };
        }
        
});