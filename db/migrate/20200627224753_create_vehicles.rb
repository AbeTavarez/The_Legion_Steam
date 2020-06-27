class CreateVehicles < ActiveRecord::Migration[6.0]
  def change
    create_table :vehicles do |t|
      t.string :brand
      t.string :model
      t.string :color
      t.integer :year
      t.string :vehicle_type
      t.string :vehicle_plate

      t.timestamps
    end
  end
end
