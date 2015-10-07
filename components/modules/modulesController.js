(function () {
    'use strict';
    var ModulesController = function ($translate, $translatePartialLoader, $scope, modulesFactory, applicationsFactory, $stateParams) {
        $translatePartialLoader.addPart('modules');
        $translate.refresh();
        $scope.isSideBarClosed = true;
        $scope.applications = applicationsFactory.getApplications();
        $scope.modules = modulesFactory.getModulesBaseInfo($stateParams.applicationId);
        $scope.applicationName = $stateParams.applicationName;
        $scope.$parent.isApplicationView = false;
        $scope.selectModule = function($event){
            var clickedListItem = $($event.target).closest('li');
            if (!clickedListItem.hasClass('active')) {
                jQuery('.sidebar li').removeClass('active');
                clickedListItem.addClass('active');
            }
        };
    };

    angular.module('cosymaApp').controller('ModulesController', ModulesController);
}());
