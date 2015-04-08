class CreateRequests < ActiveRecord::Migration
  def change
    create_table :requests do |t|
      t.string :firstName
      t.string :lastName
      t.string :phone
      t.string :email
      t.string :businessName
      t.string :businessPhone
      t.string :businessWebsite
      t.string :prefcontact
      t.text :whatItDoes
      t.text :siteLayout
      t.text :dynamic
      t.text :users
      t.text :analysis

      t.timestamps null: false
    end
  end
end
