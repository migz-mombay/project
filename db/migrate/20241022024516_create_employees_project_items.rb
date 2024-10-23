class CreateEmployeesProjectItems < ActiveRecord::Migration[7.2]
  def change
    create_table :employees_project_items, id: false do |t|
      t.belongs_to :employee
      t.belongs_to :project_item

      t.timestamps
    end
  end
end
