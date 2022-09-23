class CreateFrequencies < ActiveRecord::Migration[6.1]
  def change
    create_table :frequencies do |t|
      t.integer :time_hours
    end
  end
end
