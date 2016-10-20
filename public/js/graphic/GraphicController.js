(function(){
	'use strict';

	angular
	.module('myApp', ['nvd3'])
	.controller('myCtrl', myCtrl); 

	myCtrl.$inject = ['graphicService'];

	function myCtrl(graphicService){
		var vm = this;
		vm.graphics = [];

		
		activate();

		function activate() {
	        return getGraphic().then();
	    }

	    function getGraphic() {
	        return graphicService.getGraphic()
	            .then(function(data) {
	                vm.graphics = data;
	                return vm.graphics;
	            });
	    }
    }

})();
