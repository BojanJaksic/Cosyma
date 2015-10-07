(function () {
    'use strict';
    angular.module('cosymaApp').factory('modulesFactory', modulesFactory);

    function modulesFactory($http) {

        var baseWebApiUrl = 'api/';
        var config = {
            getModuleBaseInfoUrl: baseWebApiUrl + 'GetModuleObjectsBaseInfo',
            getModuleUrl: baseWebApiUrl + 'GetModuleObject'
        };

        return {
            // define api for our service
            getModulesBaseInfo: getModulesBaseInfo,
            getModule: getModule
        };

        function getModulesBaseInfo(applicationId) {
            //return $http.get(config.getModulesBaseInfo, data{ applicationId: applicationId});
            return [{ id: 1, name: 'Status' },
                    { id: 2, name: 'Module 2' },
                    { id: 3, name: 'Module 3' }];
        }

        function getModule(moduleId) {
            //return $http.get(config.getModuleUrl, data{ moduleId: moduleId});
            var module = null;
            angular.forEach(getModulesBaseInfo(1), function($module) {
                if ($module.id === id) {
                    module = $module;
                }
            });
            return module;
        }
    }
}());
