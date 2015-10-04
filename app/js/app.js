var current_language = window.navigator.userLanguage || window.navigator.language;
current_language = current_language.indexOf('en') === 0 ? 'en_EN' : 'de_DE';

//var app = angular.module('cosymaApp', ['ngRoute', 'pascalprecht.translate']);
var app = angular.module('cosymaApp', ['ngRoute', 'pascalprecht.translate', 'angular-sidemenu', 'angular-navigation']);


app.config(['$routeProvider', '$translateProvider', '$translatePartialLoaderProvider', function ($routeProvider, $translateProvider, $translatePartialLoaderProvider) {
    /**
     * Configure the translate provider to load json translation files from the url template.
     * Observe the server folder structure: 'app/translations/{lang}/{part}.json'
     */
    $translateProvider.useLoader('$translatePartialLoader', {
        urlTemplate: 'app/translations/{lang}/{part}.json'
    });
    // Set the language
    $translateProvider.preferredLanguage(current_language);

    // configure routes
    var viewBase = 'app/views/';
    $routeProvider
        .when('/modules', {
            controller: 'ModulesController',
            templateUrl: viewBase + 'modules.html',
            controllerAs: 'vm'
        })
        .when('/applications', {
            controller: 'ApplicationsController',
            templateUrl: viewBase + 'applications.html',
            controllerAs: 'vm'
        })
        .otherwise({ redirectTo: '/modules' });
}]);