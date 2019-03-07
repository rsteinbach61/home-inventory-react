class HomeSerializer < ActiveModel::Serializer
  attributes :id, :room_id, :name, :user_id
end
