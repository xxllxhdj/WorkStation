define([
    'ionic',
    'apps/ngCordova/barcodeScanner/barcodeScanner.ctrl',
    'apps/ngCordova/customPlugins/customPlugins'
], function () {
    angular.module('WorkStation', [
        'ionic',
        'ngCordova',

        'demo.barcodeScanner.ctrl',
        'demo.customPlugins'
    ])

        .run(['$ionicPlatform', '$timeout', function ($ionicPlatform, $timeout) {
            $ionicPlatform.ready(function () {
                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
                if (window.cordova && window.cordova.plugins.Keyboard) {
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                }
                if (window.StatusBar) {
                    StatusBar.styleDefault();
                }
                if (navigator.splashscreen) {
                    $timeout(function () {
                        navigator.splashscreen.hide();
                    }, 1500);
                }
            });
        }])
        .config(['$stateProvider', '$urlRouterProvider', '$ionicConfigProvider', function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
            $stateProvider.state('home', {
                url: '/home',
                templateUrl: 'tpls/home.html',
                controller: 'HomeCtrl'
            })
                .state('ngCordova', {
                    url: '/ngCordova',
                    templateUrl: 'apps/ngCordova/ngCordova.html'
                })
                .state('ngCordova-barcodeScanner', {
                    url: '/ngCordova/barcodeScanner',
                    templateUrl: 'apps/ngCordova/barcodeScanner/barcodeScanner.html',
                    controller: "BarcodeScannerCtrl"
                })
                .state('ngCordova-customPlugins', {
                    url: '/ngCordova/customPlugins',
                    templateUrl: 'apps/ngCordova/customPlugins/customPlugins.html',
                    controller: "customPluginCtrl"
                });
            $urlRouterProvider.otherwise('/home');

            $ionicConfigProvider.platform.android.navBar.alignTitle('center');
            $ionicConfigProvider.platform.android.backButton.previousTitleText(false);
            $ionicConfigProvider.platform.android.navBar.transition('ios');
        }])

        .controller('HomeCtrl', ['$scope', function ($scope) {
            $scope.techData = [{
                id: 'ionic',
                name: 'ionic',
                logo: 'img/ionic.png'
            }, {
                id: 'ngCordova',
                name: 'ngCordova',
                logo: 'img/ngCordova.png'
            }];
        }]);
});