class CreateAppointments < ActiveRecord::Migration[6.1]
  def change
    create_table :appointments do |t|
      t.integer :doctor_id
      t.integer :patient_id
      t.timestamp :day
      t.text :motive
      t.timestamps
    end
  end
end
