'use strict';

angular.module("monfusportsstoreApp")
    .factory( 'AuthService', function($cookieStore) {
        
        return {
            login: function(user,pass) {
                if(user == "admin" && pass == "guest") {
                    var currUser = [];
                    currUser.username = user;
                    currUser.password = pass;
                    $cookieStore.put('currentUser', currUser.username);
                    return currUser;
                }
                else {
                    return null;
                }
                                
            },
            
            getCurrentUser: function() {
                var userName = "";
                userName = $cookieStore.get('currentUser');
                console.log(userName);
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
                
            }

        };
  
});

