(function() {
    'use strict';

    // Usage:
    // 
    // Creates:
    // 

    angular
        .module('MenuApp')
        .component('categoryItems', {
            templateUrl: 'views/items.component.template.html',
            bindings: {
                items: '<',
            },
        });
})();