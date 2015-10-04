(function () {
    'use strict';
    var computerSideElement = function () {
        return {
            restrict: 'E',
            scope: { computer: '=computerData' },
            templateUrl: 'shared/computer/computerElement.html'
        };
    };

    angular.module('cosymaApp').directive('computerSideElement', computerSideElement);
}());