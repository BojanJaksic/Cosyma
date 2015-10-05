(function () {
    'use strict';
    angular.module('cosymaApp').factory('applicationsFactory', applicationsFactory);

    function applicationsFactory($http) {

        var baseWebApiUrl = 'api/';
        var config = {
            getApplicationsUrl: baseWebApiUrl + 'ApplicationsObjects'
        };

        return {
            // define api for our service
            getApplications : getApplications
        };

        function getApplications() {
            //return $http.get(config.getApplicationsUrl);
            return [
                {name: 'Tenant Management', moduleUrl:'modules', moduleCount: 21},
                {name: 'OS Deployment', moduleUrl:'modules', moduleCount: 37},
                {name: 'Maintenance Window Management', moduleUrl:'modules', moduleCount: 5},
                {name: 'Software Management', moduleUrl:'modules', moduleCount: 12},
                {name: 'Computer Management', moduleUrl:'modules', moduleCount: 63}];}
    }
}());