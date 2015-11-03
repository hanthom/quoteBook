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

	$scope.showHide = {
		add: false,
		remove: false,
		filter: false
	};

	$scope.toggleOptions = function(action) {
		for(x in $scope.showHide) {
			if (action !== x) {
				$scope.showHide[x] = false;
			}
			else {
				$scope.showHide[action] = !$scope.showHide[action];
			}
		}
	};

});