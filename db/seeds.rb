# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Medicine.create(name: "Ibuprofen")
Medicine.create(name: "Omeprazol")
Medicine.create(name: "Antibiotic")

for i in 1..24 do
    Frequency.create(time_hours: i)
end