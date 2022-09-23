class Doctor < ApplicationRecord
  has_secure_password
  validates :username, presence: true
  validates :username, uniqueness: :true
  has_many :appointments
  has_many :patients, through: :appointments
end
