(function() {
    'use strict';

    angular
        .module('MenuApp')
        .controller('CategoryItemsController', Controller);

    Controller.$inject = ['data'];

    function Controller(data) {
        var itemsList = this;

        console.log(data);
        //console.log(categoryName);

        itemsList.items = data.menu_items;
        itemsList.categoryName = data.category.name;
    }
})();