(function() {
    'use strict';

    function addRentAdvertsDirective() {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: './src/app/adverts/rent/add/template.html',
            scope: {},
            controllerAs: 'vm',
            bindToController: true,
            /* jshint unused:false*/
            controller: function($log, RentAdvertsService) {
                var vm=this;
                RentAdvertsService.getRentAdverts()
                    .then(function(rentAdverts) {
                        console.log('RentAdverts in directives :',rentAdverts.data);
                        vm.rentAdverts = rentAdverts.data;

                    }, function(error){
                        $log.error('Error RentAdverts', error);
                    });
                
            },
            link: function(scope, elm, attrs){
            }
        };
    }

angular.module('app.directives.adverts.rent.add', ['app.services.adverts.rent.add'])
    .directive('addRentAdverts', addRentAdvertsDirective); 

})();