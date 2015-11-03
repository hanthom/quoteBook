angular.module('quoteBook').controller('mainCtrl', function($scope, DataService) {

	$scope.quotes = DataService.getData();

	$scope.newQuote = {
		text: "",
		author: ""
	};
	
	$scope.addQuote = function(newQuote) {
		DataService.addData($scope.newQuote);
		$scope.newQuote = {
			text: "",
			author: ""
		};
	};

	$scope.removeQuote = function(byeQuote) {
		DataService.removeData($scope.byeQuote);
		$scope.newQuote = {
			text: "",
			author: ""
		};
	};
	
	$scope.showHide = false;

});