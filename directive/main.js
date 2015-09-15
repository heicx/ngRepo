require.config({
	paths: {
		"angular": "../bower_components/angular/angular",
		"angular-route": "../bower_components/angular-route/angular-route",
		"zepto": "../node_modules/jquery/dist/jquery"
	},
	shim: {
		"angular": {
			exports: "angular"
		},
		"angular-route": {
			exports: "angular-route",
			deps: ["angular"]
		},
		"jquery": {
			exports: "jquery"
		}
	},
	urlArgs: "v=" + (new Date()).getTime()
})

require(['app']);