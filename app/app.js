var myNinjaApp = angular.module("myNinjaApp", ['ngRoute']);

myNinjaApp.config(['$routeProvider', function($routeProvider){

	$routeProvider
		.when('/home', {
			templateUrl: 'views/home.html'
		})
		.when('/directory', {
			templateUrl: 'views/directory.html',
			controller: 'NinjaController'
		})
		.otherwise({
			redirectTo: '/home'
		});

}]);

myNinjaApp.controller("ninjaController", ['$scope', function($scope){

	$scope.removeNinja = function(ninja){
		var removedNinja = $scope.ninjas.indexOf(ninja);
		$scope.ninjas.splice(removedNinja, 1);
	}

	$scope.addNinja = function(){
		$scope.ninjas.push({
			name: $scope.newninja.name,
			belt: $scope.newninja.belt,
			rate: parseInt($scope.newninja.rate),
			available: true
		});

		$scope.newninja.name = "";
		$scope.newninja.belt = "";
		$scope.newninja.rate = "";
	}


	$scope.ninjas = [
	{
		name: 'Yoshi',
		belt: 'Green',
		rate: 50,
		available: true,
		thumb: 'http://placehold.it/50x50/666666/ffffff'

	},
	{
		name: 'Crystal',
		belt: 'Yellow',
		rate: 30,
		available: true,
		thumb: 'http://placehold.it/50x50/666666/ffffff'

	},
	{
		name: 'Ryu',
		belt: 'Orange',
		rate: 10,
		available: true,
		thumb: 'http://placehold.it/50x50/666666/ffffff'


	},
	{
		name: 'Shaun',
		belt: 'Blue',
		rate: 1000,
		available: true,
		thumb: 'http://placehold.it/50x50/666666/ffffff'

	}
	];


}]);