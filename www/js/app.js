// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('WorkStation', [
    'ionic',
    'ngCordova',

    'demo.barcodeScanner.ctrl'
])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    })
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

angular.element(document).ready(function() {
    angular.bootstrap(document, ['WorkStation']);
});