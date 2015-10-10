(function () {
    'use strict';
    var ApplicationsController = function ($translate, $translatePartialLoader, $scope, DUMMY_APP_CONFIG) {
        $translatePartialLoader.addPart('applications');
        $translate.refresh();
        $scope.$parent.isApplicationView = true;
        $scope.applications = DUMMY_APP_CONFIG.CoSyMaWebUI.Applications.Application;
    };

    angular.module('cosymaApp').controller('ApplicationsController', ApplicationsController);
}());

