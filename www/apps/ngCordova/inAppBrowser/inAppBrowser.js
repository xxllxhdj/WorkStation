
define(['ionic'], function () {
    angular.module('demo.inAppBrowser', [])

        .controller('inAppBrowserCtrl', ['$rootScope', '$scope', '$cordovaInAppBrowser', function ($rootScope, $scope, $cordovaInAppBrowser) {
            $scope.url = 'http://www.baidu.com';
            $scope.target = '_blank';

            $scope.openUrl = function () {
                var options = {
                    location: "no"
                };
                $cordovaInAppBrowser.open($scope.url, $scope.target, options).then(function () {
                    //$cordovaToast.showShortBottom("InAppBrowser opened http://ngcordova.com successfully");
                }, function (error) {
                    //$cordovaToast.showShortBottom("Error: " + error);
                });
            };
            $scope.openLocalURL = function () {
                var options = {
                    location: "no"
                };
                $cordovaInAppBrowser.open('apps/ngCordova/testChildApp/index.html', $scope.target, options).then(function () {
                    //$cordovaToast.showShortBottom("InAppBrowser opened http://ngcordova.com successfully");
                }, function (error) {
                    //$cordovaToast.showShortBottom("Error: " + error);
                });
            };
            $scope.openIonicApp = function () {
                var options = {
                    location: "no"
                };
                $cordovaInAppBrowser.open('apps/ngCordova/www/index.html', $scope.target, options).then(function () {
                    //$cordovaToast.showShortBottom("InAppBrowser opened http://ngcordova.com successfully");
                }, function (error) {
                    //$cordovaToast.showShortBottom("Error: " + error);
                });
            };
        }]);
});