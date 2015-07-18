var myApp = angular.module('myApp', []);

myApp.controller("MyController", function MyController($scope) {
	$scope.cards = [
	{
		"name":"Plains",
		"type":"Basic Land - Plains",
		"deck":"UW Angels"
	},	
	{
		"name":"Citadel Seige",
		"type":"Enchantment",
		"deck":"UW Angels"
	},
	{
		"name":"Wingmate Roc",
		"type":"Creature - Bird",
		"deck":"UW Angels"
	},
	{
		"name":"Angel of Serenity",
		"type":"Creature - Angel",
		"deck":"UW Angels"
	},
	{
		"name":"Cavern of Souls",
		"type":"Land",
		"deck":"UW Angels"
	}
]
});