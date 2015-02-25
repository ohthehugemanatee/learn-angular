/**
 * Created by ohthehugemanatee on 20/02/15.
 */

(function(){
    var app = angular.module('store', []);


    app.controller('StoreController', function(){
        this.products = gems;
    });


    app.controller("ReviewController", function() {
        this.review = {};
        this.addReview = function(product){
          product.reviews.push(this.review);
          this.review = {};
        };
    });

    app.directive('productTitle', function(){
        return {
          restrict: 'E',
          templateUrl: 'product-title.html'
        };
    });

    app.directive('productPanels', function(){
        return {
            restrict: 'E',
            templateUrl: 'product-panels.html',
            controller: function() {
                this.tab = 1;
                this.selectTab = function(setTab) {
                    this.tab = setTab;
                };
                this.isSelected = function(checkTab) {
                    return this.tab === checkTab;
                };
            },
            controllerAs: 'panel'
        };
    })

    var gems = [
        {
            name: 'Dodecahedron',
            price: 2,
            description: 'Here is a description',
            canPurchase: true,
            soldOut: false,
            images: [
                {
                    full: 'images/tsg2.jpg',
                    thumb: ''
                }
            ],
            specifications: 'No specification provided',
            reviews: [
                {
                    stars: 5,
                    body: 'I love this product!',
                    author: 'info@example.com'
                },
                {
                    stars: 2,
                    body: 'I do not like this product!',
                    author: 'another@example.com'
                }]
        },
        {
            name: 'Pentagonal Gem',
            price: 5.95,
            description: 'describing a pentagonal gem',
            canPurchase: false
        }
    ];

})();