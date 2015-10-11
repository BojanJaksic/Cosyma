(function () {
    'use strict';

    function applicationsFactory(DUMMY_APP_CONFIG, $filter) {

        return {
            getApplications: function getApplications() {
                return DUMMY_APP_CONFIG.CoSyMaWebUI.Applications.Application;
            },
            getApplication: function getApplication(applicationId) {
            return $filter('filter')(DUMMY_APP_CONFIG.CoSyMaWebUI.Applications.Application, {Id: applicationId})[0];
            }
        };
    }

    angular.module('cosymaApp').factory('applicationsFactory', applicationsFactory);
}());
