var ApplicationsController = function ($translate, $translatePartialLoader, $scope) {
    $scope.applications = ['Application 1', 'Application 2', 'Application 3'];
    $translatePartialLoader.addPart('applications');
    $translate.refresh();
};

//ApplicationsController.$inject = injectParams;

angular.module('cosymaApp').controller('ApplicationsController', ApplicationsController);