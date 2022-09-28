class DoctorSerializer < ActiveModel::Serializer
  attributes :id, :username, :dob, :specialty, :firstname, :lastname
  has_many :appointments
  has_many :patients, through: :appointments
end
