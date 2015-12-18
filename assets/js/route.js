'use strict';

angular.module('uijack')
    .config(function ( $stateProvider, $urlRouterProvider ) {
        $urlRouterProvider.when('', '/index');

        $stateProvider
            .state('index', {
                url: '/index',
                templateUrl: 'templates/navigate.tpl.html',
                controller: 'IndexCtrl'
            })
            .state('index.page1', {
                url: '/page1',
                templateUrl: 'templates/page1.tpl.html'
            })
            .state('index.page2', {
                url: '/page1',
                templateUrl: 'templates/page2.tpl.html'
            })
            .state('index.page3', {
                url: '/page1',
                templateUrl: 'templates/page3.tpl.html'
            })
        ;

        $urlRouterProvider.otherwise('/index');
    }
);
