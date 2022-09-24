class PatientSerializer < ActiveModel::Serializer
  attributes :id, :username, :dob, :firstname, :lastname
end
