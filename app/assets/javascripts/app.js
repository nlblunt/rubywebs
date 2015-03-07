(function()
{
	var rubywebs = angular.module("rubywebs",
	[
		'templates',
		'ngRoute',
		'ngResource',
		'ui.bootstrap',
		'appControllers',
		'appServices',
		'angulartics',
		'angulartics.google.analytics'

	]);

	rubywebs.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider)
	{
		$locationProvider.hashPrefix('!');

		$routeProvider.when('/',
		{
			templateUrl: "html/index.html",
			controller: "homeController"
		})
		.otherwise(
		{
			redirectTo: '/'
		});
	}]);
})();