angular.module('myApp')
  .directive('myClick', function($parse) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        element.on('click', function(event) {
          scope.$apply(function() {
            $parse(attrs.myClick)(scope, { $event: event });
          });
        })

      }
    }
  })

// $compile('<html>Hallo {{name}}</html>')(scope)
// $interpolate('Hallo {{name}}')(scope)
// $parse('name')(scope)
