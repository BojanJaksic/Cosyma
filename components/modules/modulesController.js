(function () {
    'use strict';
    var ModulesController = function ($translate, $translatePartialLoader, $scope, modulesFactory, applicationsFactory, $state, $stateParams) {
        $translatePartialLoader.addPart('modules');
        $translate.refresh();
        $scope.isSideBarClosed = false;
        $scope.applications = applicationsFactory.getApplications();
        $scope.modules = modulesFactory.getModulesBaseInfo($stateParams.applicationId);
        $scope.selectedModule = $scope.modules[0];
        $scope.applicationName = $stateParams.applicationName;
        $scope.$parent.isApplicationView = false;
        $scope.selectModule = function($event, $module){
            var clickedListItem = $($event.target).closest('li');
            if (!clickedListItem.hasClass('active')) {
                jQuery('.sidebar li').removeClass('active');
                clickedListItem.addClass('active');
                this.$parent.selectedModule = $module;
            }
        };
    };

    angular.module('cosymaApp').controller('ModulesController', ModulesController);
}());
