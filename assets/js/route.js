'use strict';

angular.module('uijack')
    .config(function ( $stateProvider, $urlRouterProvider ) {
        $urlRouterProvider.when('', '/index');

        $stateProvider
            .state('home', {
                url: '',
                templateUrl: 'templates/navigate.tpl.html',
                controller: 'IndexCtrl'
            })
            .state('home.index', {
                url: '/index',
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

        $urlRouterProvider.otherwise('/index');
    }
);
