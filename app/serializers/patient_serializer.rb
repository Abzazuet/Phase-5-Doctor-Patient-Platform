class PatientSerializer < ActiveModel::Serializer
  attributes :id, :username, :dob, :firstname, :lastname
  has_many :appointments
end
