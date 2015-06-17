
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

            $rootScope.$on("$cordovaInAppBrowser:exit", function (event, result) {
                alert(result.type + ', ' + result.additional);
            });
            //$rootScope.$on("$cordovaInAppBrowser:loaderror", function (event, result) {
            //    alert(result.code + ', ' + result.message);
            //});
        }]);
});