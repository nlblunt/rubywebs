require 'rails_helper'

RSpec.describe RequestController, type: :controller do
	before(:each) do
		Request.destroy_all
	end

	describe "'POST' create" do
		describe "With valid params" do
			it "Creates a new request" do
				post :create, request:{firstName: "First Name", lastName: "Last Name", phone: "541-285-1155", email: "name@test.com"}

				expect(Request.count).to eq(1)
				expect(response.status).to eq(201)
			end
		end

		describe "With invalid params" do
			it "Doesn't create a new article" do
				post :create, request:{firstName: nil, lastName: "Last Name", phone: "541-285-1155", email: "name@test.com"}
				post :create, request:{firstName: "First Name", lastName: nil, phone: "541-285-1155", email: "name@test.com"}
				post :create, request:{firstName: "First Name", lastName: "Last Name", phone: nil, email: "name@test.com"}
				post :create, request:{firstName: "First Name", lastName: "Last Name", phone: "541-285-1155", email: nil}

				expect(Request.count).to eq(0)
			end
		end
	end
end
