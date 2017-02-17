(function() {
    'use strict';

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .filter('description', DescriptionFilterFactory)
        .constant('MenuBasePath', "https://davids-restaurant.herokuapp.com/")
        .directive('foundItems', FoundItemsDirective);

    function FoundItemsDirective() {
        var ddo = {
            templateUrl: "foundItems.html",
            restrict: 'E',
            scope: {
                foundItems: '<',
                onRemove: '&'
            }
        }

        return ddo;
    }

    NarrowItDownController.$inject = ['MenuSearchService'];

    function NarrowItDownController(MenuSearchService) {
        var ctrl = this;

        ctrl.showMessage = false;
        ctrl.message = "Nothing found!";

        ctrl.getMatchedMenuItems = function() {
            ctrl.found = [];
            if (ctrl.searchTerm === "") {
                ctrl.showMessage = true;
            } else {
                ctrl.showMessage = false;
                MenuSearchService.getMatchedMenuItems(ctrl.searchTerm)
                    .then(function(items) {
                        ctrl.found = items;
                        if (ctrl.found.length === 0) {
                            ctrl.showMessage = true;
                        }
                    });
            }

        };

        ctrl.removeItem = function(index) {
            ctrl.found.splice(index, 1);
        };
    }

    MenuSearchService.$inject = ['$http', 'MenuBasePath', 'descriptionFilter'];

    function MenuSearchService($http, MenuBasePath, descriptionFilter) {
        this.getMatchedMenuItems = function(searchTerm) {
            return $http({
                    url: MenuBasePath + "menu_items.json",
                    method: "GET"
                })
                .then(function(response) {
                    var foundItems = descriptionFilter(response.data, searchTerm);
                    return foundItems;
                });
        };
    }

    function DescriptionFilterFactory() {
        return function(data, filter) {
            var items = data.menu_items.filter(function(item) {
                return item.description.indexOf(filter) !== -1;
            });
            return items;
        };
    }

})();