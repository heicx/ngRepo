define(["angular", "zepto"], function(angular, $) {
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

	var $div = $('<div ng-controller="testCtrl">{{content.label}}</div>');
	$(document.body).append($div);
	console.log(angular.element(document).injector());

	angular.element(document).injector().invoke(function($compile) {
		var scope = angular.element($div).scope();
	  	$compile($div)(scope);
	});
});