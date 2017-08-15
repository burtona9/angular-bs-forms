var app = angular.module("claimApp");
app.controller("typeController", ["$scope", "typeService", function ($scope, typeService) {
    $scope.type = null;
    $scope.subtype = null;
    $scope.claim = null;
    $scope.typeSelected = function () {
        $scope.subtypes = typeService.getSubtypes($scope.type);
        if ($scope.subtypes.length == 1) $scope.subtype = $scope.subtypes[0];
    };
    $scope.claimSubmit = function () {
        $scope.formSubmitted = true;
    }
}]);
