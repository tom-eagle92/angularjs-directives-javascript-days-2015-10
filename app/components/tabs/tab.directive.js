angular.module('myApp')
  .directive('tab', function() {
    return {
      scope: {
        heading: '@'
      },
      require: '^tabs',
      transclude: true,
      template: '<div class="tab-pane" ng-show="active" ng-transclude></div>',
      link: function(scope, element, attrs, tabsCtrl) {
        scope.active = false;
        tabsCtrl.addTab(scope);
      }
    }
  });
