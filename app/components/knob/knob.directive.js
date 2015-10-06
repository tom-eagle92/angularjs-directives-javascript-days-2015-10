angular.module('myApp')
  .directive('knob', function() {
    return {
      restrict: 'E',
      require: 'ngModel',
      link: function(scope, element, attrs, ngModel) {
        element.knob({
          change: function(value) {
            ngModel.$setViewValue(Math.ceil(value));
          }
        });

        ngModel.$render = function() {
          element
            .val(ngModel.$viewValue)
            .trigger('change');
        }

      }
    }
  });
