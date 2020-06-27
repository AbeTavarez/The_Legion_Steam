class CreateJobs < ActiveRecord::Migration[6.0]
  def change
    create_table :jobs do |t|
      t.string :location
      t.datetime :date
      t.string :job_type
      t.string :special_request
      t.boolean :isAccepted
      t.boolean :need_access

      t.timestamps
    end
  end
end
