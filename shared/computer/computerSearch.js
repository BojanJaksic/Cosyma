(function () {
    'use strict';
    var computerSearch = function () {
        return {
            restrict: 'E',
            templateUrl: 'shared/computer/computerSearch.html'
        };
    };

    angular.module('cosymaApp').directive('computerSearch', computerSearch);
}());