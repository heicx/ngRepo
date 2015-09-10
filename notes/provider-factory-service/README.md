# 什么是provider？
> provider可以为应用提供通用服务，形式可以是常量，也可以是对象。

* 比如我们在controller里注入进来的$http，$scope都可以认为是provider，例如：

```
module.controller("MainCtrl", function($scope, $http) {
	$http.get(...).then(...);	
});
```

* 让我们自己定义一个provider，例如：
 
```
$provide.provider("test", function() {
	this.n = 3;
	this.$get  = function() {
		return n;
	}	
});

module.controller("MainCtril", function($scope, test) {
	$scope.test = test;
})
```

* 让我们再看一下provider内部实现代码，如下：

```
function provider(name, provider_) {
	if (isFunction(provider_)) {
    	provider_ = providerInjector.instantiate(provider_);
  	}
  	if (!provider_.$get) {
    	throw Error('Provider ' + name + ' must define $get factory method.');
  	}
  	return providerCache[name + providerSuffix] = provider_;
}
```

* 由上面的源码可以看到provider的基本规则就是通过实现$get方法来进行单例注入。使用时活动$get执行后的结果。
* 要记住关于provider最重要的事情就是，它在$get方法中所返回的数据是可以在module.config中访问并使用的。这是他与factory、service最大的不同。

---

# 什么是factory？

> 如果觉得每次都要写一个$get方法来实现provider方法注入，那么可以使用factory。

* 可以说factory是provider的简化、变种。因为factory方法调用时替我们完成了$get方法的封装。

```
module.factory("date", function() {
	return new Date();
});

module.controller("MainCtrl", function($scope, date) {
	$scope.date = date;
});
```
* 让我们来看看factory源码部分中替我们做了什么，如下：

```
function factory(name, factoryFn) {
  return provider(name, {
    $get: factoryFn
  });
}
```

* 在factory方法中只需要将字面量对象或实例对象返回，当把factory注入到controller中，对象的这些属性及方法都可以通过factory访问。

---

# Service

> 当我们创建一个service时，我们要知道的最重要的事情就是service可以通过new关键字替我们实例化对象。

```
module.service("myService", function() {
	this.public_property = "hello";
	this._static_property = "bye";
	this.func1 = function() {
		alert(this._static_property);
	}
});

module.controller("MainCtrl", function($scope, myService) {
	myService.func1();
	$scope.property = myService.public_property;
});
```











