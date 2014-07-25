// create angular app
	var validationApp = angular.module('validationApp', []);

	// create angular controller
	validationApp.controller('validationController', function($scope) {

		// function to submit the form after all validation has occurred			
		$scope.submitForm = function() {

			// check to make sure the form is completely valid
			if ($scope.accountSettings.$valid) {
				alert('our form is amazing');
			}

		};

	});