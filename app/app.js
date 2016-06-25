angular.module('demo', [])
angular.module('demo').controller('MyCtrl', function ($scope, $http) {
  $http.get('/name').then(function (result) {
    $scope.name = result.data
  })
})
