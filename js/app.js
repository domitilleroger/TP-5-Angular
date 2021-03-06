// Crée un module
var app = angular.module('app', []);

app.controller('appController', function($scope){
	$scope.hide = true;
	
	$showForm 	= false;
	$validated 	= false;
	$scope.adressLines= 1;

	$scope.types 	= types;
	$scope.pates 	= pates;
	$scope.extras 	= extras;
	$scope.choices 	= choices;

	/* Temp */
	$typePrice 		= 0;
	$patePrice 		= 0;
	$extraPrice 	= { 'Olives': 0, 'Anchois': 0, 'Chèvre': 0, 'Piment': 0, 'Total': 0};
	$scope.totalPrice = 0;

	$scope.clearAll = function(){
		$('html').empty();
	};

	$scope.validateForm = function(){
		$validated=!$validated;
	};
	$scope.range = function(n) {
	    return new Array(n);
	};
	$scope.getTypePrice = function($type){
		angular.forEach($scope.types, function(item) {
			if( $type == item.name) {
				$typePrice = item.price;
			}
	    });
	}
	$scope.getPatePrice = function($pate){
		angular.forEach($scope.pates, function(item) {
			if( $pate == item.name) {
				$patePrice = item.price;
			}
	    });
	}
	$scope.getExtraPrice = function($extras){
		angular.forEach($scope.extras, function(item) {
			if(item.name == 'Olives' && $extras['Olives']){
				$extraPrice['Olives']= item.price;
			}
			else if(item.name == 'Anchois' && $extras['Anchois']){
				$extraPrice['Anchois']= item.price;
			}
			else if(item.name == 'Chèvre' && $extras['Chèvre']){
				$extraPrice['Chèvre']= item.price;
			}
			else if(item.name == 'Piment' && $extras['Piment']){
				$extraPrice['Piment']= item.price;
			}
			else if(item.name == 'Olives' && !$extras['Olives']){
				$extraPrice['Olives']= 0;
			}
			else if(item.name == 'Anchois' && !$extras['Anchois']){
				$extraPrice['Anchois']= 0;
			}
			else if(item.name == 'Chèvre' && !$extras['Chèvre']){
				$extraPrice['Chèvre']= 0;
			}
			else if(item.name == 'Piment' && !$extras['Piment']){
				$extraPrice['Piment']= 0;
			}
	    });
	    $extraPrice['Total'] = $extraPrice['Olives']+$extraPrice['Anchois']+$extraPrice['Chèvre']+$extraPrice['Piment'];
	}

	$scope.calculateTotalPrice = function(){
		$scope.getTypePrice($scope.choices.typeName);
		$scope.getPatePrice($scope.choices.pateName);
		$scope.getExtraPrice($scope.choices.extraName);

		$scope.totalPrice = ($scope.choices.parts * ($typePrice + $patePrice + $extraPrice['Total'])) / 6 ;
		console.log("type price * (nb parts + pate + extra)/6 : "+ $scope.totalPrice);
	}

	// Le css ne semble pas prendre en compte la classe bien écrite dans le "ng-class"
	$scope.sliceArray = function($number){
		var partSlice = [];
		for (var i=0 ; i< Math.floor($number/6) ; i++){
			partSlice.push(6);	
		}
		partSlice.push($number%6);
		return partSlice;
	}
});