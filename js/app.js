/**
 * Created by ohthehugemanatee on 20/02/15.
 */

(function(){
    var app = angular.module('store', []);


    app.controller('StoreController', function(){
        this.product = gem ;
    });

    var gem = {
        name: 'Dodecahedron',
        price: 2.95,
        description: 'Here is a description'
    };

})();