'use strict';

angular.module('uijack')
    .config(function ( $stateProvider, $urlRouterProvider ) {
        $urlRouterProvider.when('', '/index0');

        $stateProvider
            .state('home', {
                url: '',
                templateUrl: 'templates/navigate.tpl.html',
                controller: 'IndexCtrl'
            })
            .state('home.index0', {
                url: '/index0',
                templateUrl: 'templates/page0.tpl.html'
            })
            .state('home.index1', {
                url: '/index1',
                templateUrl: 'templates/page1.tpl.html'
            })
            .state('home.index2', {
                url: '/index2',
                templateUrl: 'templates/page2.tpl.html'
            })
            .state('home.index3', {
                url: '/index3',
                templateUrl: 'templates/page3.tpl.html'
            })
        ;

        $urlRouterProvider.otherwise('/index0');
    }
);
