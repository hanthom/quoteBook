angular.module('quoteBook').controller('mainCtrl', function($scope, DataService) {

	$scope.quotes = DataService.getData();

});