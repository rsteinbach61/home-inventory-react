class ChangeHouseId < ActiveRecord::Migration[5.2]
  def change
    change_table :rooms do |t|
      t.rename :house_id, :home_id
    end
  end
end
