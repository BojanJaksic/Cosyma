(function () {
    'use strict';
    var MainController = function ($translate, $translatePartialLoader, $scope) {
        // ----- TRANSLATION -----
        $translatePartialLoader.addPart('applications');
        $translate.refresh();

        $scope.isApplicationView = true;
    };

    angular.module('cosymaApp').controller('MainController', MainController);
}());

