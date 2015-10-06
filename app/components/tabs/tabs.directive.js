angular.module('myApp')
  .directive('tabs', function() {
    return {
      restrict: 'E',
      transclude: true,
      scope: {},
      templateUrl: 'components/tabs/tabs.html',
      bindToController: true,
      controllerAs: 'tabs',
      controller: function() {
        var ctrl = this;
        ctrl.allTabs = [];
        ctrl.activeTab = undefined;

        ctrl.selectTab = function(tab) {
          ctrl.activeTab = tab;
          angular.forEach(ctrl.allTabs, function(singleTab) {
            singleTab.active = false;
          });
          tab.active = true;
          console.log('Tab selected', tab)
        }

        ctrl.addTab = function(tab) {
          ctrl.allTabs.push(tab);
          console.log(tab.heading);
        }
      }
    }
  });
