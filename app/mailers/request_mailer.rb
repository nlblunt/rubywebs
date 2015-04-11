class RequestMailer < ApplicationMailer
    default from: 'notification@rubywebs.net'
    
    def new_signup(contact)
       @contact = contact
       
       mail(to: 'nicolas.blunt@gmail.com', subject: 'New Request')
    end
end
