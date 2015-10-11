(function () {
    'use strict';
    var ComputerController = function ($translate, $translatePartialLoader, $location, $scope, computerFactory, applicationsFactory) {
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

        // set the search config from the application configuration file
        try {
            if ($location && $location.$$path) {
                var selectedAppId = $location.$$path.split('/applications/')[1].substring(0, 1);
                var selectedApp = applicationsFactory.getApplication(selectedAppId);
                var appSearchConfig = selectedApp.ComputerSelection;
            }
        } catch (e) {
            console.log('Error getting application search configuration');
        }

        $scope.searchComputers = function(computersSearchValue){
            $scope.isSearchDisabled = true;
            $scope.computers = computerFactory.getComputers(computersSearchValue);
            $scope.isSearchDisabled = false;
        };
    };

    angular.module('cosymaApp').controller('ComputerController', ComputerController);
}());

