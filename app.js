(function () {
    'use strict';
    var current_language = window.navigator.userLanguage || window.navigator.language;
    current_language = current_language.indexOf('en') === 0 ? 'en_EN' : 'de_DE';

    var dependencies = ['ui.router', 'pascalprecht.translate', 'angular-sidemenu', 'angular-navigation', 'angularUtils.directives.uiBreadcrumbs'];
    var app = angular.module('cosymaApp', dependencies);


    app.config(function ($stateProvider, $urlRouterProvider, $translateProvider, $translatePartialLoaderProvider) {
        /**
         * Configure the translate provider to load json translation files from the url template.
         * Observe the server folder structure: 'app/translations/{lang}/{part}.json'
         */
        $translateProvider.useLoader('$translatePartialLoader', {
            urlTemplate: 'translations/{lang}/{part}.json'
        });
        // Set the language
        $translateProvider.preferredLanguage(current_language);

        // configure routes
        var viewBase = 'components/';
        $urlRouterProvider.otherwise('/modules');
        $stateProvider
            .state('modules', {
                url: '/modules',
                controller: 'ModulesController',
                templateUrl: viewBase + 'modules/modules.html',
                controllerAs: 'vm',
                crumbDisplayName: 'Modules'
            })
            .state('applications', {
                url: '/applications',
                controller: 'ApplicationsController',
                templateUrl: viewBase + 'applications/applications.html',
                controllerAs: 'vm',
                crumbDisplayName: 'Applications'
            });
    });
}());

