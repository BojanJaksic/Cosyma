(function () {
    'use strict';
    angular.module('cosymaApp').factory('modulesFactory', modulesFactory);

    function modulesFactory($http) {

        var baseWebApiUrl = 'api/';
        var config = {
            getModulesUrl: baseWebApiUrl + 'ModuleObjects'
        };

        return {
            // define api for our service
            getModules : getModules
        };

        function getModules() {
            //return $http.get(config.getModulesUrl);
            return [{ id: 1, name: 'Module 1' },
                    { id: 1, name: 'Module 2' },
                    { id: 1, name: 'Module 3' }];
            }
    }
}());
