(function () {
    'use strict';
    var ModulesController = function ($translate, $translatePartialLoader, $scope, $state, $stateParams, $filter, DUMMY_APP_CONFIG) {
        $translatePartialLoader.addPart('modules');
        $translate.refresh();

        $scope.isSideBarClosed = false;
        var selectedApplication = $filter('filter')(DUMMY_APP_CONFIG.CoSyMaWebUI.Applications.Application, {Name: $stateParams.applicationId})[0];
        $scope.modules = selectedApplication.Modules.Module;
        $scope.selectedModule = $scope.modules[0];
        $scope.applicationName = $stateParams.applicationName;
        $scope.$parent.isApplicationView = false;
        $scope.selectModule = function($event, $module){
            var clickedListItem = $($event.target).closest('li');
            if (!clickedListItem.hasClass('active')) {
                jQuery('.sidebar li').removeClass('active');
                clickedListItem.addClass('active');
                this.$parent.selectedModule = $module;
                $event.stopPropagation();
            }
        };
    };

    angular.module('cosymaApp').controller('ModulesController', ModulesController);
}());
