(function () {
    'use strict';
    var ApplicationsController = function ($translate, $translatePartialLoader, $scope) {
        $scope.applications = ['Application 1', 'Application 2', 'Application 3'];
        $translatePartialLoader.addPart('applications');
        $translate.refresh();
    };

    angular.module('cosymaApp').controller('ApplicationsController', ApplicationsController);
}());

