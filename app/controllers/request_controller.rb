class RequestController < ApplicationController
	def create
		request = Request.create(request_params)

		if request.valid?
			render nothing: true, status: :created
		else
			render nothing: true, status: :error
		end
	end

	private
	def request_params
		params.require(:request).permit(:firstName, :lastName, :phone, :email, :businessName, :businessPhone, :prefcontact, :whatItDoes, :siteLayout, :dynamic, :users, :analysis)
	end
end
