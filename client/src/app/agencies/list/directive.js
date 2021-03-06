(function() {
    'use strict';

    function listAgenciesDirective() {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: './src/app/agencies/list/template.html',
            scope: {},
            controllerAs: 'vm',
            bindToController: true,
            /* jshint unused:false*/
            controller: function($log,$state, ListAgenciesService,DeleteAgenciesService) {
                var vm=this;
                ListAgenciesService.getAgencies()
                    .then(function(agencies) {
                        //$log.debug('agencies in directives :',agencies.data);
                        vm.agencies = agencies.data;

                    }, function(error){
                        $log.error('Error agencies', error);
                    });


                vm.deleteAgencie = function(id){
                    $log.debug('delete : ');
                    $log.debug(id);

                    DeleteAgenciesService.deleteAgencie(id)
                    .then(function(agencie) {
                        $log.debug('agencies in directives :',agencie.data);
                        //vm.agencies = agencies.data;
                        $state.reload('root.agencies');
                        //alert('L\'agence ('+agencie.data.name+') a été supprimé');

                    }, function(error){
                        $log.error('Error agencies', error);
                    });
                };
                
            },
            link: function(scope, elm, attrs){
            }
        };
    }

angular.module('app.directives.agencies.list', ['app.services.agencies.list'])
    .directive('listAgencies', listAgenciesDirective); 

})();