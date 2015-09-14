## injector

### **常见的几种依赖注入的方式**

- 推断式注入

```
var app = angular.module("MyApp", []);

var MyCtrl = function($scope) { 
	//参数名称必须要和被注入的对象名称相同。
	//此处只能为$scope，angular会推断匹配。
	$scope.name = "heicx";
}

app.controller("MyCtrl", MyCtrl);
```

> 总结：上面这种写法不利于javascript代码做压缩。

---

- 声明式注入（标注式注入）

```
var app = angular.module("MyApp", []);

var MyCtrl = function(scope) { 
	//此处只能为scope名称可以随意，与injector注入顺序对应。
	scope.name = "heicx";
}

app.$injector = ["$scope"];
app.controller("MyCtrl", MyCtrl);
```

> 总结：上面这种写法的注入方式虽然可行，但是并不是很直观。于是有了第三种写法。

---

- 内联式注入

```
var app = angular.module("MyApp", []);

var MyCtrl = function(scope) { 
	//此处只能为scope名称可以随意，与injector注入顺序对应。
	scope.name = "heicx";
}

app.controller("MyCtrl", ["$scope", MyCtrl]);
```

> 总结：上面这种写法匹配直观，而且打包压缩时变量名变更也不会受到影响。

---

### **创建injector**

<<<<<<< HEAD
- 首先通过bindJQuery()绑定JQUery或者jqLite，实现angular.element。
- 由publishExternalAPI(angular)暴露api，挂载一些通过方法，如：angular.forEach，实现angular.module，并定义模块ng，以及ngLocale。angular.module主要通过setupModuleLoader()方法实现。
- 当dom ready时，开始angular的初始化操作。如下：

```
jqLite(document).ready(function() {
	angularInit(document, bootstrap);	
});
```

- 在angular初始化时会再angularInit方法中调用bootstrap()方法进行injector模块注入。
- bootstrap()方法中会调用createInjector()方法来实现provider、instance两个对象的Cache，用于接收createIntervalInjector()方法的创建结果。
- createIntervalInjector()方法会创建出instanceInjector对象。
=======
- 
>>>>>>> a442c93de75eae8f7f697207068b0b525b57b143
