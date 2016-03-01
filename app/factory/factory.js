'use strict';

angular.module("monfusportsstoreApp")
    .factory( 'AuthService', function($cookieStore, $rootScope, $http, ENDPOINT_URI) {
        
        var url = ENDPOINT_URI + '/api/Account/';

        return {
            login: function(user, pass, callback) {
                $http.post(url, { username: user, password: pass })
                   .success(function (response) {
                       callback(response);
                   });
            },
            
            getCurrentUser: function() {
                var userName = "";
                userName = $cookieStore.get('currentUser');
                return userName;
            },
            
            logOut: function() {
                $cookieStore.remove('currentUser');
            },
            
            isLoggedIn : function() {
                var userName = "";
                userName = $cookieStore.get('currentUser');
                if(userName != undefined) {
                    return true;
                }
                else {
                    return false;
                }
                
            },
            
            clearCredentials: function() {
                $rootScope.globals = {};
                $cookieStore.remove('currentUser');
                $http.defaults.headers.common.Authorization = 'Basic';
            }

        };
  
});

