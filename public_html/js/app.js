'use strict';

/* App Module */

var myApp = angular.module('iMarket', ['ui.bootstrap', 'ngI18n', 'itemsServices']);
myApp.config(['$routeProvider', function($routeProvider) {
        $routeProvider.
                when('/main', {templateUrl: 'html/main.html', controller: MainCtrl}).
                /*when('/user/:userId', {templateUrl: 'html/user-detail.html', controller: UserDetailCtrl}).*/
                otherwise({redirectTo: '/main'});
    }]);

myApp.value('ngI18nConfig', {
    defaultLocale: 'en',
    supportedLocales: ['en', 'fr'],
    cache: true,
    basePath: 'json/i18n/bundle'
});