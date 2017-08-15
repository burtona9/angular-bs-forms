var app = angular.module("claimApp", ["ngRoute", "ngAnimate", "ngTouch", "ui.bootstrap", "ngMessages"]);
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when("/", {
        title: "forms"
        , templateUrl: "app/views/form.html"
        , controller: "typeController"
        , controllerAs: 'tc'
    }).when("/time", {
        title: "forms"
        , templateUrl: "app/views/time.html"
        , controller: "timepickCtrl"
    })
}]);
