var myNinjaApp = angular.module("myNinjaApp", ['ngRoute', 'ngAnimate']); //dependency injection of ngRoute for routing 

myNinjaApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){ // passing through dependecny routeProvider

	// $locationProvider.html5Mode(true);   --> use for pretty URLs but cannot get it to work with refreshing active 

	$routeProvider
		.when('/home', {								//no # added here - only added in href 
			templateUrl: 'views/home.html',
			controller: 'ninjaController'
		})
		.when('/directory', {
			templateUrl: 'views/directory.html',
			controller: 'ninjaController'
		})
		.when('/contact',{
			templateUrl: 'views/contact.html',
			controller: 'contactController'
		})
		.when('/contact-complete',{
			templateUrl: 'views/contact-complete.html',
			controller: 'contactController'
		})
		.otherwise({
			redirectTo: '/home'
		});

}]);


myNinjaApp.directive("randomNinja", [function(){   //creating my own directive 

	return {						//return an object - the key element to making a directive 
		restrict: 'E',
		scope: {
			ninjas: '=',
			title: '='
		},
		templateUrl: 'views/random.html',
		transclude: true,    //include transclude to allow any nested info between the origianl created tags s
		controller: function($scope){
			$scope.random = Math.floor(Math.random()*4);
		}

	};

}])


myNinjaApp.controller("ninjaController", ['$scope', '$http', function($scope, $http){  	// this is the ninjaController 


	$scope.removeNinja = function(ninja){
		var removedNinja = $scope.ninjas.indexOf(ninja);
		$scope.ninjas.splice(removedNinja, 1);
	};

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
	};

	$http.get('data/ninjas.json').then(function(response){  // use the http service to get some data and the data is at given path - when we get it fire this function 
		$scope.ninjas = response.data;
	});

	$scope.removeAll = function(){
		$scope.ninjas =[];
	}


}]);

myNinjaApp.controller("contactController", ['$scope', '$location', function($scope, $location){

	$scope.sendMessage = function(){
		$location.path("/contact-complete");
	}

	$scope.backAgain = function(){
		$location.path("/contact");
	}

}])





