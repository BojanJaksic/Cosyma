(function () {
    'use strict';
    angular.module('cosymaApp').factory('sideMenuFactory', sideMenuFactory);

    function sideMenuFactory($http) {

        var baseWebApiUrl = '/services/';
        var config = {
            computersUrl: baseWebApiUrl + ''
        };

        return {
            // define api for our service
            getComputers : getComputers
        };

        function getComputers() {
            return $http.get(config.computersUrl);
        }
    }
}());
