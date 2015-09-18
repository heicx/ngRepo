angular.module("myApp", []).
directive('jxbBindCompiledHtml', function($compile) {
      'use strict';

      return {
            template: '<div></div>',
            scope: {
                  rawHtml: '=jxbBindCompiledHtml'
            },
            link: function(scope, elem, attrs) {
                  scope.$watch('rawHtml', function(value) {

                        if (!value) {
                              return;
                        }

                        // we want to use the scope OUTSIDE of this directive
                        // (which itself is an isolate scope).
                        var newElem = $compile($.parseHTML(value))(scope.$parent);
                        elem.contents().remove();
                        elem.append(newElem);
                  });
            }
      };
});

angular.element(document).ready(function() {
      //没有设置ng-app，需要手动指定并启动加载module模块。
      angular.bootstrap(document, ["myApp"]);
})