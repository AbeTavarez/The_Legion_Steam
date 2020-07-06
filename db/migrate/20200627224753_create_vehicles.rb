class CreateVehicles < ActiveRecord::Migration[6.0]
  def change
    create_table :vehicles do |t|
      t.string :brand, null: false
      t.string :model, null: false
      t.string :color, null: false
      t.integer :year
      t.string :vehicle_type
      t.string :vehicle_plate, null: false
      t.references :user, null: false, foreign_key: true
      t.timestamps
    end
  end
end
