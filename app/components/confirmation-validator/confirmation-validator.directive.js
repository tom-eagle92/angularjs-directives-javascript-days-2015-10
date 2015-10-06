angular.module('myApp')
  .directive('confirmationValidator', function() {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function(scope, element, attrs, ngModel) {
        var attrToConfirm = attrs.confirmationValidator;

        ngModel.$validators.confirmationValidator = function(value) {
          return scope[attrToConfirm] === value;
        }
      }
    }
  });
