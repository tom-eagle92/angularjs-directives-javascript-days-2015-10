angular.module('myApp')
  .controller('HomeIndexController', function () {
    var ctrl = this;

    ctrl.log = function(event) {
      ctrl.name = 'Sascha';
      console.log(event)
    }
  });
