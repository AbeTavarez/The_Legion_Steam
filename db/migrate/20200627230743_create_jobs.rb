class CreateJobs < ActiveRecord::Migration[6.0]
  def change
    create_table :jobs do |t|
      t.string :location, null: false
      t.datetime :date, null: false
      t.string :job_type, null: false
      t.string :special_request
      t.boolean :isAccepted
      t.boolean :need_access
      t.references :vehicle, null: false, foreign_key: true
      t.timestamps
    end
  end
end
