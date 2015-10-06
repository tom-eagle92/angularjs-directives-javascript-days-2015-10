angular.module('myApp')
  .directive('colorpicker', function(){
    return {
      restrict: 'E',
      templateUrl: 'components/colorpicker/colorpicker.html',
      transclude: true,
      scope: {
        r: '@',
        g: '@',
        b: '@'
      }
    }
  });
