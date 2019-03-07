class ItemSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :name, :room_id, :make, :model, :upc, :purchase_date, :serial_num, :purchase_price
end
