class CreatePatients < ActiveRecord::Migration[6.1]
  def change
    create_table :patients do |t|
      t.string :username
      t.string :password_digest
      t.date :dob
      t.string :firstname
      t.string :lastname

      t.timestamps
    end
  end
end
