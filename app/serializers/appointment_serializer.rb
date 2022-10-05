class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :doctor_id, :patient_id, :day, :motive, :status, :notes
  belongs_to :doctor
  belongs_to :patient
  has_many :preescriptions, dependent: :destroy
end
