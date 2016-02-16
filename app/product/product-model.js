'use strict';

angular.module("monfusportsstoreApp")
    .service("ProductModel", function($http, ENDPOINT_URI, $q){

        var service = this;    
        var products = [];    
        
        // products = [{"id":"e08aafa3-1d37-4be3-a985-74c8acbca697","name":"Nike Air Max 2015","description":"Orange and Yellow Nike Boots","category":"Men","subcategory":"Footwear","section":"BasketballShoes","price":275.0,"count":0,"image":"nikeAirMax2015.jpg" },
        // {"id":"e08aafa3-1d37-4be3-a985-74c8acbca701","name":"Nike Air Max Emergent","description":"These Nike Air Max Emergent Basketball Shoes offer performance and style whilst on the courts with their mix of synthetic and genuine leather upper that provides durability and support, with Breathe Tech technology that allows for ventilation and breathability. The Phylon midsole is lightweight with flex grooves to the outsole for flexibility, motion, cushioning and stability under foot, finished with the revolutionary Air-Sole unit in the heel. ","category":"Men","subcategory":"Footwear","section":"BasketballShoes","price":80.0,"count":0,"image":"NikeAirMaxEmergent.jpg" },
        // {"id":"e08aafa3-1d37-4be3-a985-74c8ccfde701","name":"Adidas Hoodie","description":"Get a comfortable and casual look with the adidas Three Stripe Logo Hoodie. The jacket features adidas branding and the distinctive three stripe detailing.","category":"Men","subcategory":"Clothing","section":"Hoodies","price":35.0,"count":0,"image":"adidasHoodie.jpg" },
        // {"id":"e08aafa3-1d37-4be3-a555-74c8ccfde701","name":"Adidas Clima 3S","description":"The adidas Clima 3S Tee has adidas' climalite technology, specially designe dto help wick away moisture from the skin and keep you dry and comfortable during exercise. The tee is short sleeve with a round neck and utilises the classic adidas branding and three stripe design.","category":"Ladies","subcategory":"Clothing","section":"Sports","price":55.0,"count":0,"image":"adidasLadiesSports.jpg" }
        // ];
        function extract(result) {
            return result.data;
        }

        service.getProducts = function() {
            var url = ENDPOINT_URI + '/api/products/';
            // $http.get(url).then(function(response){ 
            //     products = response.data; 
            //     console.log(products);
            // });
            // return products;
            
            var d = $q.defer();
                $http.get(url).success(function(data){
                    d.resolve(data);
                });
                return d.promise;        
        
        }
        
    })