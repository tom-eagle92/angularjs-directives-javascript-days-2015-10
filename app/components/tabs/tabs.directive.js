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
        this.allTabs = [];
        this.activeTab = undefined;

        this.selectTab = function(tab) {
          this.activeTab = tab;
          angular.forEach(this.allTabs, function(singleTab) {
            singleTab.active = false;
          });
          tab.active = true;
          console.log('Tab selected', tab)
        }

        this.addTab = function(tab) {
          this.allTabs.push(tab);
          console.log(tab.heading);
        }
      }
    }
  });
