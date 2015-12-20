'use strict';

var app = angular.module('uijack', [
  'ngAnimate',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap'
]);

app.config(function ( $locationProvider ) {
  // 用于去掉url用的# 首页head里面必须添加 <base href="/">
  // 这个需要后台请求支持,返回首页，然后让route渲染剩下部分。否则刷新页面会Not Found
  // $locationProvider.html5Mode(true);
});

app.run(function ( $rootScope, $state, $stateParams ) {
  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;
  $(window).resize(function() {
    console.log('1111');
    $('body').css('width',$(window).width()+'px').css('height',$(window).height()+'px').css('overflow','hidden');
  });
});
