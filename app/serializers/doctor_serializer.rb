class DoctorSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :dob, :specialty, :username, :lastname, :created_at
end
