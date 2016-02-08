'use strict';

angular.module('monfusportsstoreApp')
    .controller('ProductModel', 
    function($scope) {
        var service = this;    
        var products = [];    
        
        products = [{"id":"e08aafa3-1d37-4be3-a985-74c8acbca697","name":"Kayak","description":"A boat for one person","category":"Watersports","price":275.0,"count":0},{"id":"a3ea7c5b-c05b-458f-96f3-fa887ab86743","name":"Lifejacket","description":"Protective and fashionable","category":"Watersports","price":48.95,"count":0},{"id":"61b0ad56-d3f1-4c4c-8268-6a2dfa5f17db","name":"Soccer Ball","description":"FIFA-approved size and weight","category":"Soccer","price":19.5,"count":0},{"id":"87a59771-6cd7-4b76-82b1-0032fe81155a","name":"Corner Flags","description":"Give your playing field a professional touch","category":"Soccer","price":34.9,"count":0},{"id":"ee4129b3-32d4-4344-9cf3-c6524690d507","name":"Stadium","description":"Flat-packed 35,000-seat stadium","category":"Soccer","price":79500.0,"count":0},{"id":"ac88dedc-e456-4c22-bdd2-e9567c0ea901","name":"Thinking Cap","description":"Improve your brain efficiency by 75%","category":"Chess","price":16.0,"count":0},{"id":"4bb3c07f-80f6-4727-b637-fde22ffbee37","name":"Unsteady Chair","description":"Secretly give your opponent a disadvantage","category":"Chess","price":29.95,"count":0},{"id":"c45c8983-d730-4d2b-a578-3739c00bf495","name":"Human Chess Board","description":"A fun game for the family","category":"Chess","price":75.0,"count":0},{"id":"6ac91b65-d9f7-4004-a51e-61f57fe6ad5f","name":"Bling-Bling King","description":"Gold-plated, diamond-studded King","category":"Chess","price":1200.0,"count":0}];

        service.getProducts = function() {
            return products;
        }

    });
