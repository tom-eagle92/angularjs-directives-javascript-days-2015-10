angular.module('myApp')
  .directive('timer', function($interval) {
    return {
      restrict: 'E',
      template: '{{ now | date: "HH:mm:ss" }}',
      controller: function($scope) {
        var timer;

        timer = $interval(function() {
          $scope.now = new Date();
          console.log('Timer')
        }, 1000);

        $scope.$on('$destroy', function() {
          $interval.cancel(timer);
        });
      }
    }
  });
