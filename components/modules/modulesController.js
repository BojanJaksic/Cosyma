(function () {
    'use strict';
    var ModulesController = function ($translate, $translatePartialLoader, $scope, $timeout) {
        $scope.modules = ['Module 1', 'Module 2', 'Module 3'];
        $translatePartialLoader.addPart('modules');
        $translate.refresh();
        $scope.$parent.isApplicationView = false;
    };

    angular.module('cosymaApp').controller('ModulesController', ModulesController);
}());
