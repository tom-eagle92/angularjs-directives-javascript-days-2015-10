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


        element
          .val(27)
          .trigger('change');

      }
    }
  });
