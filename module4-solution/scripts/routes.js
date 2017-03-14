(function() {
    'use strict';

    angular
        .module('MenuApp')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function RoutesConfig($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'views/home.template.html'
            })
            .state('categories', {
                url: '/categories',
                templateUrl: 'views/categories.template.html',
                controller: 'CategoriesController as categoryList',
                resolve: {
                    items: ['MenuDataService', function(MenuDataService) {
                        return MenuDataService.getAllCategories().then(function(response) {
                            return response.data;
                        });
                    }]
                }
            })
            .state('items', {
                url: '/categories/{categoryShortName}',
                templateUrl: 'views/items.template.html',
                controller: 'CategoryItemsController as itemsList',
                resolve: {
                    data: ['$stateParams', 'MenuDataService', function($stateParams, MenuDataService) {
                        return MenuDataService.getItemsForCategory($stateParams.categoryShortName).then(function(response) {
                            return response.data;
                        });
                    }]
                }
            });

    }

})();