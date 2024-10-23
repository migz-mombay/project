class CreateProjectItemEmployees < ActiveRecord::Migration[7.2]
  def change
    create_table :project_item_employees, id: :uuid do |t|
      t.references :project_item, foreign_key: true, type: :uuid
      t.references :employee, foreign_key: true, type: :uuid
      
      t.timestamps
    end
  end
end
