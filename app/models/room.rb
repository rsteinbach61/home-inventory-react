class Room < ApplicationRecord
  belongs_to :home
  has_many :items, dependent: :destroy
end
