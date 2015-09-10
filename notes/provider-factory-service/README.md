# 什么是provider？
> provider可以为应用提供通用服务，形式可以是常量，也可以是对象。

* 比如我们在controller里注入进来的$http，$scope都可以认为是provider。

```javascript
app.controller("MainCtrl", function($scope, $http) {
	$http.get(...).then(...);	
});
```
* 让我们自己定义一个provider

```javascript
$provide.provider("test", function() {
	this.n = 3;
	this.$get  = function() {
		return n;
	}	
});

