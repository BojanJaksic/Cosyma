(function () {
    'use strict';
    angular.module('cosymaApp').factory('navigationFactory', navigationFactory);

    function navigationFactory($http) {

        var baseWebApiUrl = '/services/';
        var config = {
            navigationXmlUrl: baseWebApiUrl + '',
            navigationJsonUrl: baseWebApiUrl + ''
        };

        return {
            // define api for our service
            getNavigationXml : getNavigationXml,
            getNavigationJson : getNavigationJson
        };

        function getNavigationXml() {
            return $http.get(config.navigationXmlUrl);
        }

        function getNavigationJson(jsonData) {
            return $http.post(config.navigationJsonUrl, jsonData);
        }
    }
}());
