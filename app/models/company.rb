class Company < ApplicationRecord
    has_many :employees
    has_many :project_items
end
