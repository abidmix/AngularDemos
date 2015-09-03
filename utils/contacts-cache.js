angular.module('myApp.utils.cache',[])
  .factory('superCache', ['$cacheFactory', function($cacheFactory) {
    return $cacheFactory('cachedData');
  }]);
