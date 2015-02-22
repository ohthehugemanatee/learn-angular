/**
 * Created by ohthehugemanatee on 20/02/15.
 */

(function(){
    var app = angular.module('store', []);


    app.controller('StoreController', function(){
        this.products = gems;
    });

    app.controller("PanelController", function() {
        this.tab = 1;
        this.selectTab = function(setTab) {
            this.tab = setTab;
        }
        this.isSelected = function(checkTab) {
            return this.tab === checkTab;
        }
    });

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
        },
        {
            name: 'Pentagonal Gem',
            price: 5.95,
            description: 'describing a pentagonal gem',
            canPurchase: false,
        }
    ];

})();