require.config({
	paths: {
		"angular": "../bower_components/angular/angular.js",
		"angular-route": "../bower_components/angular-route/angular-route.js"
	},
	shim: {
		"angular": {
			exports: "angular"
		},
		"angular-route": {
			exports: "angular-route",
			deps: ["angular"]
		}
	}
})

require(['app'], function (app) {
	app.init();
});