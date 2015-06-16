
define(['ionic'], function () {
    angular.module('demo.inAppBrowser', [])

        .controller('inAppBrowserCtrl', ['$scope', '$cordovaInAppBrowser', function ($scope, $cordovaInAppBrowser) {
            $scope.url = 'http://www.baidu.com';
            $scope.target = '_blank';
            $scope.openUrl = function () {
                var options = {
                    location: "no"
                };
                $cordovaInAppBrowser.open($scope.url, '_blank', options).then(function () {
                    //$cordovaToast.showShortBottom("InAppBrowser opened http://ngcordova.com successfully");
                }, function (error) {
                    //$cordovaToast.showShortBottom("Error: " + error);
                });
            };
        }]);
});