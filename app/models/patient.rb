class Patient < ApplicationRecord
  has_secure_password
  validates :username, presence: true
  validates :username, uniqueness: :true
  has_many :appointments, dependent: :destroy
  has_many :doctors, through: :appointments
end
