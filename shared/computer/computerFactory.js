(function () {
    'use strict';
    angular.module('cosymaApp').factory('computerFactory', computerFactory);

    function computerFactory($http) {

        var baseWebApiUrl = '/services/';
        var config = {
            getComputersUrl: baseWebApiUrl + ''
        };

        return {
            // define api for our service
            getComputers : getComputers
        };

        function getComputers() {
            return [{ id: 1, name: 'Computer 001', online: true },
                    { id: 2, name: 'Computer 002', online: false }];
            //return $http.get(config.getComputersUrl);
        }
    }
}());
