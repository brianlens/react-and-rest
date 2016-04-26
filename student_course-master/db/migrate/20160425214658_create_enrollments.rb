class CreateEnrollments < ActiveRecord::Migration
  def change
    create_table :enrollments do |t|
      t.datetime :start_date
      t.datetime :end_date
      t.references :student
      t.references :course

      t.timestamps null: false
    end
  end
end
