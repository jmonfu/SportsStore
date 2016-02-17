'use strict';

angular.module("monfusportsstoreApp")
    .service("ProductModel", function($http, ENDPOINT_URI, $q){

        var service = this;    
        
        function extract(result) {
            return result.data;
        }

        service.getProducts = function() {
            var url = ENDPOINT_URI + '/api/products/';
            
            var d = $q.defer();
                $http.get(url).success(function(data){
                    d.resolve(data);
                });
                return d.promise;        
        
        }
        
    })