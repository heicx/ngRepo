define(["angular"], function(angular) {
	

	var module = angular.module("myApp", []);
	module.controller("MyCtrl1", ["$scope", function($scope) {
		console.log($scope);
	}]);
	module.controller("MyCtrl", ["$scope", function($scope) {
		console.log($scope);
	}]);
});