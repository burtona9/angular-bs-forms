var app = angular.module("claimApp");
app.directive("appHeader", function () {
    return {
        restrict: "E"
        , templateUrl: "/app/views/templates/header.html"
    };
});
app.directive("appFooter", function () {
    return {
        restrict: "E"
        , templateUrl: "/app/views/templates/footer.html"
    };
});
app.directive("milageForm", function () {
    return {
        restrict: "E"
        , templateUrl: "/app/views/templates/milageform.html"
    };
});
app.directive("timeForm", function () {
    return {
        restrict: "E"
        , templateUrl: "/app/views/templates/timeform.html"
    };
});
