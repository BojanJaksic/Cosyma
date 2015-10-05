(function () {
    'use strict';
    var ApplicationsController = function ($translate, $translatePartialLoader, $scope, applicationsFactory) {
        $translatePartialLoader.addPart('applications');
        $translate.refresh();

        $scope.$parent.isApplicationView = true;
        $scope.applications = applicationsFactory.getApplications();
    };

    angular.module('cosymaApp').controller('ApplicationsController', ApplicationsController);
}());

