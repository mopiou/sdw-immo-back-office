(function(){
    'use strict'

    function RentAdvertsService($http,$log,API){
        var service = {};
        service.rentAdverts = [];
        //var key = 'd07241f7f943c6861fa0a520b52cc049';
        service.getRentAdverts = function () {
            $log.debug('Get all the rent adverts');
            return $http.get(API.URL+'rents',{
                params:{
                    //api_key: key
                },
            })
            .success(function(data) {
                $log.debug('Get all the rent adverts', data);
                service.rentAdverts = data
            })
            .error(function(error) {
                $log.error('Error', error);
            })

        };
        return service;
    }

    function DeleteRentAdvertService($http,$log,API){
        var service = {};
        service.rentAdvert = [];

        service.deleteRentAdvert = function (id) {
            $log.debug('delete rentAdvert : ',id);
            return $http.delete(API.URL+'rents/'+id)
            .success(function(data) {
                $log.debug('delete rentAdvert :  ', data);
                //service.rentAdvert = data
            })
            .error(function(error) {
                $log.error('Error', error);
            })

        };
        
        return service;
    }

angular.module('app.services.adverts.rent.list', [])
    .factory('RentAdvertsService', RentAdvertsService)
    .factory('DeleteRentAdvertService', DeleteRentAdvertService);
})()

