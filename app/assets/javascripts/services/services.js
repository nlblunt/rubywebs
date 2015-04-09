var appServices = angular.module('appServices', ['ngResource', 'angularFileUpload']);

appServices.factory('requestFactory',['$resource', '$q', function($resource, $q)
{
	var self = {};

	var Request = $resource('/request/:id', {id: '@id'});

	self.saveRequest = function(request)
	{
		var new_request = new Request;

		new_request.firstName = request.first_name;
		new_request.lastName = request.last_name;
		new_request.phone = request.phone;
		new_request.email = request.email;
		new_request.businessName = request.business_name;
		new_request.businessPhone = request.business_phone;
		new_request.businessWebsite = request.business_website;
		new_request.prefcontact = request.prefcontact;
		new_request.whatItDoes = request.what_it_does;
		new_request.siteLayout = request.site_layout;
		new_request.dynamic = request.dynamic;
		new_request.users = request.users;
		new_request.analysis = request.analysis;

		new_request.$save();
	}; 

	return self;
}])