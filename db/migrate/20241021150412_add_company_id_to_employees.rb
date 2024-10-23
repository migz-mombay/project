class AddCompanyIdToEmployees < ActiveRecord::Migration[7.2]
  def change
    add_reference :employees, :company, foreign_key: true, type: :uuid
  end
end
