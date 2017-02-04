(function() {
    'use strict';

    angular.module('LunchCheckerApp', [

    ]);
})();

(function() {
    'use strict';

    angular
        .module('LunchCheckerApp')
        .controller('LunchCheckerController', LunchCheckerController);

    LunchCheckerController.inject = ['$scope'];

    function LunchCheckerController($scope) {

        $scope.message = "";
        $scope.dishes = "";

        $scope.checkIfTooMuch = function() {
            if ($scope.dishes === "") {
                $scope.message = "Please enter data first";
                $scope.messageColor = "red";
            } else {
                var items = $scope.dishes.split(',');
                var itemsNum = items.length;

                for (var i = 0; i < items.length; i++) {
                    if (items[i].trim() === "") {
                        itemsNum--;
                    }
                }

                if (itemsNum > 3) {
                    $scope.message = "Too much!";
                    $scope.messageColor = "green";
                } else {
                    if (itemsNum === 0) {
                        $scope.message = "Please enter data first";
                        $scope.messageColor = "red";
                    } else {
                        $scope.message = "Enjoy!";
                        $scope.messageColor = "green";
                    }

                }
            }
        };

    }
})();