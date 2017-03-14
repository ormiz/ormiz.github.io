(function() {
    'use strict';

    angular
        .module('data')
        .service('MenuDataService', Service);

    Service.$inject = ['$http', 'MenuBasePath'];

    function Service($http, MenuBasePath) {

        this.getAllCategories = function() {

            return $http({
                url: MenuBasePath + "categories.json",
                method: "GET"
            });

        };

        this.getItemsForCategory = function(categoryShortName) {

            return $http({
                url: MenuBasePath + "menu_items.json?category=" + categoryShortName,
                method: "GET"
            });

        };

    }
})();