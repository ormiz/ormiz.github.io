(function() {
    'use strict';

    angular.module('ShoppingListCheckOffApp', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];

    function ToBuyController(shoppingListCheckOffService) {
        var list = this;

        list.items = shoppingListCheckOffService.getToBuyItems();

        list.isEmpty = function() {
            return list.items.length === 0;
        };

        list.checkItemBought = function(index) {
            shoppingListCheckOffService.checkItemBought(index);
        };

    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

    function AlreadyBoughtController(shoppingListCheckOffService) {
        var list = this;

        list.items = shoppingListCheckOffService.getAlreadyBoughtItems();
        list.isEmpty = function() {
            return list.items.length === 0;
        };
    }

    function ShoppingListCheckOffService() {

        var toBuyItems = [{ name: 'cookis', quantity: 10 },
            { name: 'chips', quantity: 5 },
            { name: 'cakes', quantity: 7 },
            { name: 'cucumbers', quantity: 6 },
            { name: 'tomatoes', quantity: 8 }
        ];

        var alreadyBoughtItems = [];

        this.getToBuyItems = function() {
            return toBuyItems;
        };

        this.getAlreadyBoughtItems = function() {
            return alreadyBoughtItems;
        }

        this.checkItemBought = function(index) {
            var items = toBuyItems.splice(index, 1);
            alreadyBoughtItems.push(items[0]);
        };
    }

})();