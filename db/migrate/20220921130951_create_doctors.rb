class CreateDoctors < ActiveRecord::Migration[6.1]
  def change
    create_table :doctors do |t|
      t.string :username
      t.string :password_digest
      t.date :dob
      t.string :specialty

      t.timestamps
    end
  end
end
