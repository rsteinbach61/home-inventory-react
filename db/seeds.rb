# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'
include Faker

5.times do
  Home.create(
    name: Faker::Color.unique.color_name,
     user_id:  Faker::Number.positive,
     room_id: Faker::Number.positive
   )
end
