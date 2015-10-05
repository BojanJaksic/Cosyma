(function () {
    'use strict';
    angular.module('cosymaApp').factory('computerFactory', computerFactory);

    function computerFactory($http) {

        var baseWebApiUrl = 'api/';
        var config = {
            getComputersUrl: baseWebApiUrl + 'ComputerObjects'
        };

        return {
            // define api for our service
            getComputers : getComputers
        };

        function getComputers(searchValue) {
            //return $http.get(config.getComputersUrl, data: { searchValue: searchValue });
            return [{ id: 1, name: 'CCCSGAC20150907', statusColor: 'green' },
                    { id: 2, name: 'CCCSGGF20154573', statusColor: 'red' },
                    { id: 2, name: 'CCCSGAC34654678', statusColor: 'white' }];
            }
    }
}());
