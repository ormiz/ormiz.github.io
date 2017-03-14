(function() {
    'use strict';

    // Usage:
    // 
    // Creates:
    // 

    angular
        .module('MenuApp')
        .component('categories', {
            templateUrl: 'views/categories.component.template.html',
            bindings: {
                items: '<',
            }
        });
})();