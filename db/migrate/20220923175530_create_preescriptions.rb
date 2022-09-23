class CreatePreescriptions < ActiveRecord::Migration[6.1]
  def change
    create_table :preescriptions do |t|
      t.integer :medicine_id
      t.integer :frequency_id
      t.integer :duration_days
      t.integer :appointment_id
    end
  end
end
