define(["angular"], function(angular) {
	angular.module("myApp", [])
	.provider("age", function() {
		this.age = 18;
		this.$get = function() {
			return this.age + "years old."
		}
	})
	.factory('property', function(){
		return {
			name: "heicx"
		};
	})
	.controller("MyCtrl", ["$scope", "$injector", "property", "age", function($scope, $injector, property, age) {
		$scope.name = "test";
		$injector.invoke(function(age) {
			console.log(age);
		});
		console.log(age);
	}]).
	directive("content", function() {
		return {
			restrict: "E",
			replace: true,
			template: "<input type='button' value='replace' data-status='1'>",
			link: function(scope, element, attrs) {
				element.bind("click", function() {
					console.log("click");
				});
			}
		}
	});
});