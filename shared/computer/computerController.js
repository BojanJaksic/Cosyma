(function () {
    'use strict';
    var ComputerController = function ($translate, $translatePartialLoader, $scope, computerFactory) {
        // ----- TRANSLATION -----
        $translatePartialLoader.addPart('computers');
        $translate.refresh();

        // ----- COMPUTERS ----- (inside the side menu)
        // other controllers should affect these values
        $scope.computers = [];
        $scope.selectedComputers = [];
        $scope.isMultiSelect = true;
        $scope.isSearchDisabled = false;
        $scope.addToSelectedComputers = function (computer) {
            if ($scope.selectedComputers.indexOf(computer) === -1) {
                if (!$scope.isMultiSelect && $scope.selectedComputers.length > 0) {
                    $scope.selectedComputers.push(computer);
                }
            }
        };

        $scope.searchComputers = function(computersSearchValue){
            $scope.isSearchDisabled = true;
            $scope.computers = computerFactory.getComputers(computersSearchValue);
            $scope.isSearchDisabled = false;
        };
    };

    angular.module('cosymaApp').controller('ComputerController', ComputerController);
}());

