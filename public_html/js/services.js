'use strict';

/* Services */

//angular.module('iMarketServices', ['ngResource']).
//    factory('User', function($resource){
//  return $resource('json/users:userId.json', {}, {
//    query: {method:'GET', params:{userId:'users'}, isArray:true}
//  });
//});

angular.module('itemsServices', ['ngResource']).
    factory('Item', function($resource){
  return $resource('json/:itemId.json', {}, {
    query: {method:'GET', params:{itemId:'items'}, isArray:true}
  });
});
