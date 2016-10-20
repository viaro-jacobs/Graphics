(function(){
	'use strict';

	angular
		.module("myApp")
		.factory('graphicService', graphicService);

	graphicService.$inject = ['$http'];

	function graphicService($http) {
		return {
			getGraphic: getGraphic
		};

		function getGraphic(){
			return $http.get('https://training-d6d75.firebaseio.com/mockups.json')
	     		.then(getGraphicComplete)
	     		.catch(getGraphicFailed);
		}

		function getGraphicComplete(response){
			return response.data;
		}

		function getGraphicFailed(error){
			return error;
		}
	}
})();