
angular.module('myApp.contacts.service', [])
    .service('contacts', ['$http', 'utils', '$q', 'superCache', function ($http, utils, $q, superCache) {

        var service = {

            getAllContacts: function() {
                var path = 'assets/contacts.json';
                var deffered = $q.defer();
                if (superCache.get('cachedData')) {
        deffered.resolve(superCache.get('cachedData'));
                } else {

                  $http.get(path).then(function(resp) {

                   superCache.put('cachedData', resp.data);
                  deffered.resolve(superCache.get('cachedData'));
                  });
                }
                return deffered.promise;
            },
            All:function() {
              var contacts=[];
              service.getAllContacts().then(function(data){
                for(var i=0;i<data.contacts.length;i++)
           {
            contacts.push({
              name:data.contacts[i].name,
              id:data.contacts[i].id,
               });
               }
           return data.contacts;
              });
              return contacts;
            },
            getContactByID: function(id) {
                var contact = {};

                if (superCache.get('cachedData') !== undefined) {

                    contact = utils.findById(superCache.get('cachedData'), id);
                }
                return contact;
            },
        }
        return service;
    }])
