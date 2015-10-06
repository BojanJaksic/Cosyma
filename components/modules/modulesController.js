(function () {
    'use strict';
    var ModulesController = function ($translate, $translatePartialLoader, $scope, modulesFactory, $stateParams) {
        $translatePartialLoader.addPart('modules');
        $translate.refresh();
        $scope.modules = modulesFactory.getModulesBaseInfo($stateParams.applicationId);
        $scope.applicationName = $stateParams.applicationName;
        $scope.$parent.isApplicationView = false;
    };

    angular.module('cosymaApp').controller('ModulesController', ModulesController);
}());
