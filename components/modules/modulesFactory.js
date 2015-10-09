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

        function getModulesBaseInfo(applicationName) {
            //return $http.get(config.getModulesBaseInfo, data{ applicationName: applicationName});
            return [{ id: 1, name: 'State', shortName: 'ST', someProperty1: 'property A', someProperty2: 'property b' },
                    { id: 2, name: 'Module 2', shortName: 'M2', someProperty1: 'property c', someProperty2: 'property d' },
                    { id: 3, name: 'Module 3', shortName: 'M3', someProperty1: 'property e', someProperty2: 'property f' }];
        }

        function getModule(moduleId) {
            //return $http.get(config.getModuleUrl, data{ moduleId: moduleId});
            var module = null;
            angular.forEach(getModulesBaseInfo(1), function($module) {
                if ($module.id === moduleId) {
                    module = $module;
                }
            });
            return module;
        }
    }
}());
