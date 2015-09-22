angular.module("myApp", []).
controller("HttpCtrl", ["$scope", "$http", function($scope, $http) {
    $scope.fetch = function() {
        $http.get("data.json").
        success(function(data) {
            $scope.data = data;
        }).
        error(function(data) {
            console.log(data);
        });
    }

    $scope.data = {
        name: "jQuery",
        version: "1.83"
    }
}]).
directive("customer", function() {
    return {
        restrict: "E",
        replace: true,
        scope: {
            obj: "=sb"
        },
        template: "<div><div>name：{{obj.name}}</div><div>version：{{obj.version}}</div><div>"
    }
});

angular.element(document).ready(function() {
    //没有设置ng-app，需要手动指定并启动加载module模块。
    angular.bootstrap(document, ["myApp"]);
});