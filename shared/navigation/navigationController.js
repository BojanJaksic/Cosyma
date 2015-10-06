(function () {
    'use strict';
    var NavigationController = function ($translate, $translatePartialLoader, $scope, applicationsFactory) {
        $translatePartialLoader.addPart('applications');
        $translate.refresh();
        $scope.applications = applicationsFactory.getApplications();
    };

    angular.module('cosymaApp').controller('NavigationController', NavigationController);
}());

