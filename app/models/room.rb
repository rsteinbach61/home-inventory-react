class Room < ApplicationRecord
  belongs_to :home
  has_many :items
end
