var ModulesController = function ($translate, $translatePartialLoader, $scope) {
    $scope.modules = ['Module 1', 'Module 2', 'Module 3'];
    $translatePartialLoader.addPart('modules');
    $translate.refresh();
};

angular.module('cosymaApp').controller('ModulesController', ModulesController);