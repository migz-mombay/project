class CreateEmployees < ActiveRecord::Migration[7.2]
  def change
    create_table :employees, id: :uuid do |t|
      t.string :first_name, null: true
      t.string :middle_name, null: true
      t.string :last_name, null: true
      t.string :email, null: true
      t.string :job_title, null: true
      t.references :company, foreign_key: true, type: :uuid

      t.timestamps
    end
  end
end
