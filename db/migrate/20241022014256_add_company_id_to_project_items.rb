class AddCompanyIdToProjectItems < ActiveRecord::Migration[7.2]
  def change
    add_column :project_items, :company_id, :uuid
  end
end
