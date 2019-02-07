class CreateItems < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|
      t.integer :user_id
      t.string :name
      t.integer :room_id
      t.string :make
      t.string :model
      t.string :upc
      t.date :purchase_date
      t.string :serial_num
      t.float :purchase_price

      t.timestamps
    end
  end
end
