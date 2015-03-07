var appControllers = angular.module('appControllers', ['appServices']);

appControllers.controller('homeController', ['$scope', function($scope)
{
    	$scope.$root.display_title = "Rubywebs";
    	$scope.$root.body_id = "home";
}]);