class DoctorSerializer < ActiveModel::Serializer
  attributes :id, :username, :dob, :specialty, :firstname, :lastname
  #has_many :appointments
end
