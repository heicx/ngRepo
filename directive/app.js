define(["angular"], function(angular) {
	angular.module("myApp", [])
	.factory('property', function(){
		return {
			name: "heicx"
		};
	})
	.controller("MyCtrl", ["$scope", "$injector", function($scope, $injector) {
		$scope.name = "test";

		$injector.invoke(function(property) {
			console.log(property.name);
		});
	}]);
});