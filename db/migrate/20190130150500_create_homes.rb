class CreateHomes < ActiveRecord::Migration[5.2]
  def change
    create_table :homes do |t|
      t.integer :user_id
      t.string :name
      t.integer :room_id

      t.timestamps
    end
  end
end
