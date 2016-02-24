'use strict';

angular.module("monfusportsstoreApp")
    .factory("UserService", function($http, ENDPOINT_URI){
        
        var url = ENDPOINT_URI + '/api/Account/';
        var errorMessage = [];
        
        return {
            
            getAllUsers: function() {
                return $http.get(url).then(handleSuccess, handleError('Error getting all users'));
            },

            createUser: function(user) {
                return $http.post(url + "/Register", user)
                    .then(handleSuccess, handleError);
            }
            
        }        
        
        function handleSuccess(res) {
            return res.status;
        }

        function handleError(res) {
            return res.data;
        }
        
});