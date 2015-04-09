class Request < ActiveRecord::Base

	validates :firstName, :lastName, :phone, :email, presence: true
end
