var app = angular.module("injectorApp", []);

var propertyFactory = function(wind) {
	this.age = "29";
	console.log(wind);
	return this;
}

app.factory("getProperty", propertyFactory);

propertyFactory.$inject = ["$window"];

app.controller("InjectorCtrl", ["$scope", "getProperty", function($scope, property) {
	console.log(property.age);
	$scope.test = function() {
		console.log("have a test");
	}
}]);