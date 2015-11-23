// Crée un module
var app = angular.module('app', []);
	app.controller('appController', function($scope){
		$scope.hide = true;
		
		$showForm 	= false;
		$validated 	= false;

		$scope.types 	= types;
		$scope.pates 	= pates;
		$scope.extras 	= extras;
		$scope.choices 	= choices;

		$scope.clearAll = function(){
			$('html').empty();
		};

		$scope.validateForm = function(){
			$validated=!$validated;
		};
	});