class CreateProjectItems < ActiveRecord::Migration[7.2]
  def change
    create_table :project_items, id: :uuid do |t|
      t.string :name, null: true

      t.timestamps
    end
  end
end
