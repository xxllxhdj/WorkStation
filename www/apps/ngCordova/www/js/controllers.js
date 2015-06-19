angular.module('starter.controllers', [])

    .controller('HomeCtrl', function ($scope) {
        $scope.goMainApp = function (url) {
            window.open(url, '_blank', 'location=no');
        };
    });
