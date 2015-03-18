var appControllers = angular.module('appControllers', ['appServices']);

appControllers.controller('homeController', ['$scope', function($scope)
{
    	$scope.$root.display_title = "Rubywebs - No upfront cost Website Developing and Hosting";
    	$scope.$root.metadescription = "Rubywebs - No upfront cost website developing and hosting using Ruby on Rails and AngularJS.  Includes SEO and Analytics with all plans."
    	$scope.$root.body_id = "home";
}]);