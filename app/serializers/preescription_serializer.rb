class PreescriptionSerializer < ActiveModel::Serializer
    attributes :id, :medicine_id, :frequency_id, :duration_days, :appointment_id
    belongs_to :appointment
  end
  