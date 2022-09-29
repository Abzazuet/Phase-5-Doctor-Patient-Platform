class AddColumnPatientAndAppointment < ActiveRecord::Migration[6.1]
  def change
    add_column :patients, :allergies, :text
    add_column :appointments, :status, :string
  end
end
