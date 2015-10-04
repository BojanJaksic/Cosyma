(function () {
    'use strict';
    angular.module('cosymaApp').factory('dataService', dataService);

    function dataService($http) {

        var baseWebApiUrl = '/services/';
        var configUrls = {
            applicationNavigationXml: baseWebApiUrl + '',
            applicationNavigationJson: baseWebApiUrl + ''
        };

        return {
            // define api for our service
            getApplicationNavigationXml : getApplicationNavigationXml,
            getApplicationNavigationJson : getApplicationNavigationJson
        };

        function getApplicationNavigationXml() {
            return $http.get(configUrls.applicationNavigationXml);
        }

        function getApplicationNavigationJson(jsonData) {
            return $http.post(configUrls.applicationNavigationJson, jsonData);
        }
    }
}());
