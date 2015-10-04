(function () {
    'use strict';
    angular.module('cosymaApp').factory('navigationService', navigationService);

    function navigationService($http) {

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
