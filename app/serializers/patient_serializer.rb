class PatientSerializer < ActiveModel::Serializer
  attributes :id, :username, :dob, :firstname, :lastname, :allergies
  has_many :appointments
  has_many :doctors, through: :appointments
end
