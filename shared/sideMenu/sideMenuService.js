(function () {
    'use strict';
    angular.module('cosymaApp').factory('sideMenuService', sideMenuService);

    function sideMenuService($http) {

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
