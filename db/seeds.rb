# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

require "faker"

# CONSTS
EMPLOYEE_COUNT = 5


company = Company.create!(name: Faker::Company.name)
puts "created company with name: #{company.name}"


project = ProjectItem.create!(name: Faker::App.name, company_id: company.id)
puts "created project with name: #{project.name}"

company.project_items << project

# create users
EMPLOYEE_COUNT.times do |i|
    employee = Employee.create!({
        first_name: Faker::Name.first_name,
        middle_name: Faker::Name.middle_name,
        last_name: Faker::Name.last_name,
        email: Faker::Internet.email,
        job_title: Faker::Job.title,
        company_id: company.id
    })

    puts "created company with name: #{employee.first_name}"
    
    # place employees into created project

    project.employees << employee

    puts "added employee: #{employee.first_name} to project: #{project.name}"
end

