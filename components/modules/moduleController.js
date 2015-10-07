(function () {
    'use strict';
    var ModuleController = function ($translate, $translatePartialLoader, $scope, modulesFactory, $state) {
        //$translatePartialLoader.addPart('modules');
        //$translate.refresh();

        $scope.module = modulesFactory.getModule(2);
    };

    angular.module('cosymaApp').controller('ModuleController', ModuleController);
}());
