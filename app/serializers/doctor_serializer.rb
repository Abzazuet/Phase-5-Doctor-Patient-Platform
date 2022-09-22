class DoctorSerializer < ActiveModel::Serializer
  attributes :id, :username, :dob, :specialty, :firstname, :lastname, :created_at
end
