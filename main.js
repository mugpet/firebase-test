/*jshint -W117*/

var app = angular.module("angularApp", ['ngMaterial', 'firebase']);

app.controller("mainCtrl", ['$scope', '$firebaseArray', function ($scope, $firebaseArray){
	
	$scope.welcome ="Angular is in the house!";
	
	var ref = new Firebase("https://mpe-firebase-test.firebaseio.com");
	$scope.messages = $firebaseArray(ref);


	// https://mpe-firebase-test.firebaseio.com/
    // another comment
	
}]);
