(function () {
    'use strict';
    var current_language = window.navigator.userLanguage || window.navigator.language;
    current_language = current_language.indexOf('en') === 0 ? 'en_EN' : 'de_DE';

    // Create the module
    var dependencies = ['ui.router', 'pascalprecht.translate', 'angular-sidemenu', 'angular-navigation', 'angularUtils.directives.uiBreadcrumbs'];
    var app = angular.module('cosymaApp', dependencies);

    /*
    * Load WebUI_Structure.xml and pass it on to the Web Api
    * */
    deferredBootstrapper.bootstrap({
        element: document.body,
        module: 'cosymaApp',
        resolve: {
            APP_CONFIG: ['$http', function ($http) {
                return $http.get('assets/static/WebUI_Structure.xml')
                        .then (function (response) {//https://api.myjson.com/bins/2tpsa
                            return $http.post('api/getNavigation', response.data, {
                                headers: { 'Accept': 'application/json', 'Content-Type': 'application/xml' }
                            });
                        })
                        .catch(function(response) {
                            console.error('Error', response.status, response.data);
                            return {};
                        });
            }]
        }
    });

    app.config(function ($stateProvider, $urlRouterProvider, $translateProvider, $translatePartialLoaderProvider, APP_CONFIG) {
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
            });
    });
}());

