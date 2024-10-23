class Employee < ApplicationRecord
    belongs_to :company
    has_many :project_items
    has_and_belongs_to_many :project_items
end
