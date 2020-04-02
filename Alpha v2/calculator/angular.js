var app = angular.module('calc', []);

app.controller('controller', function($scope) {
	var acceptNewNumber = true;
	var total;
	var pendingTotal;
	$scope.answer = 0;

	$scope.addNumber = function (number) {
		if (acceptNewNumber) {
			$scope.answer = number;
			acceptNewNumber = false;
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
	}

	$scope.pi = function () {
		var pi = Math.PI;
		var converted = pi.toString();
		$scope.answer += converted;
		pendingTotal += converted;
	}

	$scope.clear = function () {
		$scope.sign = '';
		$scope.answer = '0';
		pendingTotal = '0';
		total = '0';
		acceptNewNumber = true;
	};

	$scope.calc = function () {
		$scope.sign = '';
		console.log(pendingTotal);
		total = eval(pendingTotal);
		$scope.answer = total;
	};

  $scope.opposite = function () {
    $scope.answer *= -1;
  };
});
