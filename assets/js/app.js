'use strict';

var app = angular.module('uijack', [
    'ngAnimate',
    'ngSanitize',
    'ui.router',
    'ui.bootstrap'
]);

app.run(function ( $rootScope, $state, $stateParams ) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
});
