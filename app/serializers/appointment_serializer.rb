class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :doctor_id, :patient_id, :day, :motive
  belongs_to :doctor
  belongs_to :patient
end
