class PatientSerializer < ActiveModel::Serializer
  attributes :id, :username, :dob, :firstname, :lastname, :created_at
end
