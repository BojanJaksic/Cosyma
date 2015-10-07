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
        $urlRouterProvider.otherwise('/applications');
        $stateProvider
            .state('applications', {
                url: '/applications',
                views: {
                    'main@': {
                        templateUrl: viewBase + 'applications/applications.html',
                        controller: 'ApplicationsController'
                    }
                },
                crumbDisplayName: 'Application'
            })
            .state('applications.modules', {
                url: '/:applicationName/modules',
                views: {
                    'main@': {
                        templateUrl: viewBase + 'modules/modules.html',
                        controller: 'ModulesController'
                    },
                    'module@applications.modules': {
                        templateUrl: viewBase + 'modules/module.html',
                        controller: 'ModuleController'
                    }
                },
                crumbDisplayName: '{{ appName }}',
                resolve: {
                    appName: function($stateParams) {
                        return $stateParams.applicationName;
                    },
                    applicationId: function($stateParams) {
                        return $stateParams.applicationId;
                    }
                }
            })
            /*.state('applications.modules.module', {
                url: '/:moduleId?moduleName',
                views: {
                    'module@': {
                        templateUrl: viewBase + 'modules/module.html',
                        controller: 'ModuleController'
                    }
                },
                crumbDisplayName: '{{ modName }}',
                resolve: {
                    modName: function($stateParams) {
                        return $stateParams.moduleName;
                    },
                    moduleId: function($stateParams) {
                        return $stateParams.moduleId;
                    }
                }
            }
        )*/;
    });
}());

