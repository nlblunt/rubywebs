var app = angular.module('appDirectives',[]);

app.directive('rwHeader', function()
{
    return{
        restrict: 'E',
        templateUrl: 'html/partials/header.html'
    };
});

app.directive('rwFooter', function()
{
    return{
        retrict: 'E',
        templateUrl: 'html/partials/footer.html'
    };
});