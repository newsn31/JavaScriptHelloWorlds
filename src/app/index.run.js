(function() {
  'use strict';

  angular
    .module('javaScriptHelloWorlds')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
