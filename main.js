var app = angular.module('textMessage', []);

app.controller('homeController', function($scope, $timeout) {

	// Example messages
	$scope.messageAB = [
		{
			message: "Nice to meet you!",
			person: "A"
		},
		{
			message: "Nice to meet you too!",
			person: "B"
		},
	]

	// function to store text messages and creators
	$scope.getData = function (message, person) {
		$timeout(
			function() {
				$scope.messageAB.push({
					message: message,
					person: person
				})
			}
		, 500);
	}

	// fetch data
	$scope.submitFromA = function (callback) {
		let newMessage = $scope.message;
		let person = "A";
		callback($scope.getData(newMessage, person))
		
	}

	// fetch data
	$scope.submitFromB = function (callback) {
		let newMessage = $scope.message;
		let person = "B";
		callback($scope.getData(newMessage, person))
	}

})