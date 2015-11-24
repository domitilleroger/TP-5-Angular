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

		$scope.totalPrice = 0;

		$scope.clearAll = function(){
			$('html').empty();
		};

		$scope.validateForm = function(){
			$validated=!$validated;
		};

		$scope.getTypePrice = function($type){
			console.log('getTypePrice '+$scope.types[0].name);
			angular.forEach($scope.types, function(item) {
		      console.log(item);
		      if( $type == item.name) {
		      	console.log("VICTOIRE ");
		      }
		    });
		}

		$scope.calculateTotalPrice = function(){
			/* 2/6 * (prix initial + option pate + extras) */
			$scope.totalPrice = $scope.types; //$scope.choices.parts;
			$scope.getTypePrice($scope.choices.typeName);
		}
	});


	/*
var types = [
    {
        name: 'Margherita',
        description: {
            body: "Tomate, mozzarella, basilic, huile d'olive",
            show: false
        },
        price: 8
    },


	*/