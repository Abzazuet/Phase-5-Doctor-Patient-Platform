class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :doctor_id, :patient_id, :preescription_id, :day, :motive
end
