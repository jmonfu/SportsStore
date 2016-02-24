'use-strict';

angular.module('monfusportsstoreApp')
    .controller("registerCtrl", function($scope, $location, UserService) {

        var vm = this;
        
        vm.register = register;
        vm.Error = '';
        var errorMessages = [];
        
        function register() {
                UserService.createUser(vm.user)
                    .then(function (response) {
                        if (response == 200) {
                            $location.path('/registerSuccess');
                        } else {
                            errorMessages = parseErrors(response);
                            for (var i = 0; i < errorMessages.length; i++) {
                                vm.Error += errorMessages[i];
                            }
                            
                        }
                    });
        }
        
        function parseErrors(response) {
            var errors = [];
            for (var key in response.ModelState) {
                for (var i = 0; i < response.ModelState[key].length; i++) {
                    errors.push(response.ModelState[key][i]);
                }
            }
            return errors;
        }        
                
    })