class Preescription < ApplicationRecord
    has_many :medicines
    has_many :frequencies
    belongs_to :appointment
end
