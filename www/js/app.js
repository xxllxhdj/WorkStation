define([
    'ionic',
    'ngCordova',

    'js/constants',
    'apps/ngCordova/barcodeScanner/barcodeScanner.ctrl',
    'apps/ngCordova/customPlugins/customPlugins',
    'apps/ngCordova/inAppBrowser/inAppBrowser'
], function () {
    angular.module('WorkStation', [
        'ionic',
        'ngCordova',

        'WorkStation.constants',
        'demo.barcodeScanner.ctrl',
        'demo.customPlugins',
        'demo.inAppBrowser'
    ])

        .run(['$rootScope', '$ionicHistory', '$location', '$ionicPlatform', '$timeout', '$cordovaToast', 'APPCONSTANTS', function ($rootScope, $ionicHistory, $location, $ionicPlatform, $timeout, $cordovaToast, APPCONSTANTS) {
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
                    }, APPCONSTANTS.SPLASH_SCREEN_EXTRA_DELAY);
                }
            });

            $ionicPlatform.registerBackButtonAction(
                onHardwareBackButton,
                APPCONSTANTS.PLATFORM_BACK_BUTTON_PRIORITY_VIEW
            );

            $rootScope.confirmExit = false;
            $rootScope.$on("$cordovaInAppBrowser:exit", function (event, result) {
                alert(result.type + ', ' + result.additional);
            });

            function onHardwareBackButton(e) {
                if ($location.path() === '/home') {
                    if ($rootScope.confirmExit) {
                        ionic.Platform.exitApp();
                    } else {
                        $rootScope.confirmExit = true;
                        $cordovaToast.showShortBottom(APPCONSTANTS.EXIT_APP_CONFIRM_STR);
                        $timeout(function () {
                            $rootScope.confirmExit = false;
                        }, APPCONSTANTS.EXIT_APP_CONFIRM_TIME);
                    }
                } else if ($ionicHistory.backView()) {
                    $ionicHistory.goBack();
                } else {
                    $rootScope.confirmExit = true;
                    $cordovaToast.showShortBottom(APPCONSTANTS.EXIT_APP_CONFIRM_STR);
                    $timeout(function () {
                        $rootScope.confirmExit = false;
                    }, APPCONSTANTS.EXIT_APP_CONFIRM_TIME);
                }

                e.preventDefault();
                return false;
            }
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
                })
                .state('ngCordova-inAppBrowser', {
                    url: '/ngCordova/inAppBrowser',
                    templateUrl: 'apps/ngCordova/inAppBrowser/inAppBrowser.html',
                    controller: "inAppBrowserCtrl"
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