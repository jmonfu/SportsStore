'use-strict';

angular.module('monfusportsstoreApp')
    .controller("registerCtrl", function($scope, RegisterService) {

        var vm = this;
        
        vm.register = function() {
            RegisterService.register(vm.user);
        }
        
    })