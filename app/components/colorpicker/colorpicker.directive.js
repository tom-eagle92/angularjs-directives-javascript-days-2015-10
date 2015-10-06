angular.module('myApp')
  .directive('colorpicker', function(){
    return {
      restrict: 'E',
      templateUrl: 'components/colorpicker/colorpicker.html',
      scope: {
        r: '@',
        g: '@',
        b: '='
      }
    }
  });
