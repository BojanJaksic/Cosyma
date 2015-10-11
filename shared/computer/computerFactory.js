(function () {
    'use strict';
    angular.module('cosymaApp').factory('computerFactory', computerFactory);

    function computerFactory($http) {
        // Every application in the navigation structure (loaded from the server) has this options, exact names
        var searchConfig = {
            CanSelectCompNr: 0,
            AfterFinishCollapse: false,
            AfterFinishShowOnlySelected: false
        };

        return {
            // define api for our service
            getComputers : getComputers,
            setSearchConfig: setSearchConfig,
            getSearchConfig: getSearchConfig
        };

        function getComputers(searchValue) {
            //return $http.get('api/ComputerObjects', data: { searchValue: searchValue });
            return [{ id: 1, name: 'CCCSGAC20150907', statusColor: 'green' },
                    { id: 2, name: 'CCCSGGF20154573', statusColor: 'red' },
                    { id: 2, name: 'CCCSGAC34654678', statusColor: 'white' }];
        }

        function getSearchConfig() {
            return searchConfig;
        }

        function setSearchConfig(conf) {
            angular.extend(searchConfig, conf);
        }
    }
}());
