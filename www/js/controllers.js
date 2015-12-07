angular.module('starter.controllers', [])

.controller('LoginWithTelkomselCtrl', function($scope,$state,TelkomselLoginAPI) {
  $scope.data = {};
  $scope.send =  function() {
    TelkomselLoginAPI.sendPhoneNumber($scope.data.phoneNumber)
      .success(function (response) {
        TelkomselLoginAPI.setPhoneNumber($scope.data.phoneNumber);
        $state.go('formToken');
      })
      .error(function (error) {
        console.log(error);
      });
  }
})
.controller('TokenCtrl', function ($scope, $state, TelkomselLoginAPI) {
  console.log(TelkomselLoginAPI.getPhoneNumber());
  $scope.data = {};
  $scope.send = function () {
    TelkomselLoginAPI.validateLoginToken($scope.data.token)
      .success(function (response) {
        TelkomselLoginAPI.setTokenAPI(response);
        $state.go('register');
      })
      .error(function (error) {
        console.log(error);
      });
  }
})
.controller('RegisterCtrl', function ($scope, $state, TelkomselLoginAPI) {
  $scope.data = {};
  $scope.data.phoneNumber = TelkomselLoginAPI.getPhoneNumber();
});
