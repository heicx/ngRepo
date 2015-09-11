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

