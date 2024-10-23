class AddNameToProjectItems < ActiveRecord::Migration[7.2]
  def change
    add_column :project_items, :name, :string
  end
end
