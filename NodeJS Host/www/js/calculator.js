var app = angular.module('calc', []);

app.controller('controller', function($scope) {
	var acceptNewNumber = true;
	var total;
	var pendingTotal;
	$scope.answer = 0;

	$scope.addNumber = function (number) {
		if (number == 'pi') {
			var pi = Math.PI;
			number = pi.toString();
		}
		if (acceptNewNumber) {
			if (number == '0') {

			} else {
				$scope.answer = number;
				acceptNewNumber = false;
			}
		} else {
			$scope.answer += number;
		}
		pendingTotal = $scope.answer;
	};

	$scope.addSign = function (sign) {
		$scope.answer += ' ' + sign + ' ';
		pendingTotal = $scope.answer;
	};

	$scope.efunction = function () {
		$scope.answer += 'e';
	};

	$scope.clear = function () {
		$scope.sign = '';
		$scope.answer = '0';
		pendingTotal = '0';
		total = '0';
		acceptNewNumber = true;
	};

	$scope.calc = function () {
		$scope.sign = '';
		total = eval(pendingTotal);
		$scope.answer = total;
	};

	$scope.opposite = function () {
		$scope.answer *= -1;
	};
});
