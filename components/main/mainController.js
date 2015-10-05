(function () {
    'use strict';
    var MainController = function ($translate, $translatePartialLoader, $scope, computerFactory, modulesFactory) {
        // ----- TRANSLATION -----
        $translatePartialLoader.addPart('applications');
        $translate.refresh();

        // ----- MODULES -----
        $scope.modules = modulesFactory.getModules();

        // ----- COMPUTERS ----- (inside the side menu)
        // other controllers should affect these values
        $scope.isApplicationView = true;
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

    angular.module('cosymaApp').controller('MainController', MainController);
}());

