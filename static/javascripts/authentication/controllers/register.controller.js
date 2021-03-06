/**
* Register controller
* @namespace thinkster.authentication.controllers
*/
(function () {
    'use strict';
    
    angular
        .module('thinkster.authentication.controllers')
        .controller('RegisterController', RegisterController);
    
    RegisterController.$inject = ['$location', '$scope', 'Authentication'];
    
    /**
    * @namespace RegisterController
    */
    function RegisterController($location, $scope, Authentication) {
        var vm = this;
        
        vm.register = register;
        
        /**
        * @name activate
        * @desc Actions to be performed when this controller is instantiated
        * @memberOf thinkster.authentication.controllers.RegisterController
        */
        function activate() {
            if (Authentication.isAuthenticated()) {
                location.url('/');
            }
        };
        
        /**
        * @name register
        * @desc Register as new user
        * @memberOf thinkster.authentication.controllers.RegisterController
        */
        function register() {
            Authentication.register(vm.email, vm.username, vm.password);
        };
    };
})();