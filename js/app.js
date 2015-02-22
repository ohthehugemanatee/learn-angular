/**
 * Created by ohthehugemanatee on 20/02/15.
 */

(function(){
    var app = angular.module('store', []);


    app.controller('StoreController', function(){
        this.products = gems;
    });

    var gems = [
        {
            name: 'Dodecahedron',
            price: 2.95,
            description: 'Here is a description',
            canPurchase: true,
            soldOut: false
        },
        {
            name: 'Pentagonal Gem',
            price: 5.95,
            description: 'describing a pentagonal gem',
            canPurchase: false,
        }
    ];

})();