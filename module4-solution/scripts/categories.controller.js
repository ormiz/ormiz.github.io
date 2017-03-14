(function() {
    'use strict';

    angular
        .module('MenuApp')
        .controller('CategoriesController', Controller);

    Controller.$inject = ['items'];

    function Controller(items) {
        var categoryList = this;
        console.log(items);
        categoryList.items = items;
    }
})();