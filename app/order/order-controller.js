'use-strict';

angular.module('monfusportsstoreApp')
    .controller("orderCtrl", function($scope, CartService, $location) {
        var vm = this;
        
        $scope.sendOrder = function(shippingDetails) {
            var order = angular.copy(shippingDetails);
            order.products = CartService.getCartProducts();
            $location.path("/complete");

            // //insert details in the database
            // $http.post(orderUrl, order)
            //     .success(function(data) {
            //         $scope.data.orderId = data.id;
            //         cart.getProducts().length = 0;
            //     })
            //     .error(function(error) {
            //         $scope.data.orderError = error;
            //     }).finally(function() {
            //         $location.path("/complete");
            //     });
        }
                
    })