'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', ['ui.router']);

    myApp.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/main');

        $stateProvider
            .state('main', {
                url: '/main',
                controller: 'MainController',
                templateUrl: 'views/main.html'
            })
        
            .state('secondList', {
                url: '/secondList',
                controller: 'SecondController',
                templateUrl: 'views/secondList.html'
            })
            .state('thirdList', {
                url: '/thirdList',
                controller: 'ThirdController',
                templateUrl: 'views/thirdList.html'
            })

    });



