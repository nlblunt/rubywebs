var appControllers = angular.module('appControllers', ['appServices']);

appControllers.controller('homeController', ['$scope', function($scope)
{
    	$scope.$root.display_title = "Ruby Webs - No upfront cost Website Developing and Hosting";
    	$scope.$root.metadescription = "Ruby Webs - No upfront cost website developing and hosting using Ruby on Rails and AngularJS.  Includes SEO and Analytics with all plans."
    	$scope.$root.body_id = "home";
}]);

appControllers.controller('requestController', ['$scope', function($scope)
{
    $scope.$root.display_title = "Ruby Webs - Request Website Developing Information";
    $scope.$root.metadescription = "Ruby Webs - Request website and hosting information";
    $scope.$root.body_id = "home";
}]);