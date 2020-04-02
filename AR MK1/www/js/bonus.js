var app = angular.module('bonus', []);

app.controller('controller', function($scope) {
	$scope.bonus = '0 hours :(';
  $scope.extra = '0 missing shifts';
  var bonus = 0;//292 temp
  var extra = 0;


	/*$scope.addNumber = function (number) {
		if (number == 'pi') {
			var pi = Math.PI;
			number = pi.toString();*/
$scope.clear = function() {
  bonus = 0;
  extra = 0;
  $scope.bonus = '0 hours :(';
  $scope.extra = '0 missing shifts';
}


      $scope.addSign = function(e) {
        if(e == '1') {
          bonus += 4;
          $scope.bonus = '';
          $scope.bonus = bonus + ' hours';
        } else if (e == '2') {
          bonus += 3.25;
          $scope.bonus = '';
          $scope.bonus = bonus + ' hours';
        } else if (e == '3') {
          bonus += 3.5;
          $scope.bonus = '';
          $scope.bonus = bonus + ' hours';
        } else if (e == '4' || e =='5') {
          bonus += 3;
          $scope.bonus = '';
          $scope.bonus = bonus + ' hours';
        } else if (e == 'K') {
          bonus += 7.75;
          $scope.bonus = '';
          $scope.bonus = bonus + ' hours';
        } else if (e =='L') {
          bonus += 8;
          $scope.bonus = '';
          $scope.bonus = bonus + ' hours';
        } else if (e == '?') {
          extra += 1;
          $scope.extra = '';
          $scope.extra = extra + ' missing shifts';
        }
      }

});
