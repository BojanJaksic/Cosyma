(function () {
    'use strict';
    angular.module('cosymaApp').factory('applicationsFactory', applicationsFactory);

    function applicationsFactory(DUMMY_APP_CONFIG, $filter) {

        return {
            getApplications: function getApplications() {
                return DUMMY_APP_CONFIG.CoSyMaWebUI.Applications.Application;
            },
            getApplication: function getApplication(applicationName) {
            return $filter('filter')(DUMMY_APP_CONFIG.CoSyMaWebUI.Applications.Application, {Name: applicationName})[0];
            }
        };
    }
}());
