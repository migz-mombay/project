class CreateCompanies < ActiveRecord::Migration[7.2]
  def change
    create_table :companies, id: :uuid do |t|
      t.string :name
      t.timestamps
    end
  end
end
