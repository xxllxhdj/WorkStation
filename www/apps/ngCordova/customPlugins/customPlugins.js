
angular.module('demo.customPlugins', [])

    .factory('extraInfoPlugin', ['$q', function ($q) {
        return {
            get: function () {
                var q = $q.defer();

                if (window.cordova && window.cordova.plugins.extraInfo) {
                    cordova.plugins.extraInfo.getExtra(function (result) {
                        q.resolve(result);
                    }, function (err) {
                        q.reject(err);
                    });
                } else {
                    q.reject('请安装extraInfo插件');
                }

                return q.promise;
            }
        };
    }])

    .controller('customCtrl', ['$scope', 'extraInfoPlugin', function ($scope, extraInfoPlugin) {
        extraInfoPlugin.get().then(function (extraInfo) {
            $scope.extraInfo = extraInfo;
            $scope.error = false;
        }, function (err) {
            $scope.extraInfo = err;
            $scope.error = true;
        });
    }]);
