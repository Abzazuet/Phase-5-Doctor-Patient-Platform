class AddNameToDoctor < ActiveRecord::Migration[6.1]
  def change
    add_column :doctors, :firstname, :string
    add_column :doctors, :lastname, :string
  end
end
