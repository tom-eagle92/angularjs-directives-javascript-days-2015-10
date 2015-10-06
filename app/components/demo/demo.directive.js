angular.module('myApp')
  .directive('demo', function($compile) {
    return {
      restrict: 'E',
      link: function(scope, element, attrs) {
        element.html('Hallo {{homeIndex.name}}')
        $compile(element.contents())(scope)
      }
    }
  })

// $compile('<html>Hallo {{name}}</html>')(scope)
// $interpolate('Hallo {{name}}')(scope)
// $parse('name')(scope)
