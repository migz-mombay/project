# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.2].define(version: 2024_10_22_024516) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "companies", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "employees", force: :cascade do |t|
    t.string "first_name"
    t.string "middle_name"
    t.string "last_name"
    t.string "email"
    t.string "job_title"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.uuid "company_id"
    t.index ["company_id"], name: "index_employees_on_company_id"
  end

  create_table "employees_project_items", force: :cascade do |t|
    t.bigint "employee_id"
    t.bigint "project_item_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["employee_id"], name: "index_employees_project_items_on_employee_id"
    t.index ["project_item_id"], name: "index_employees_project_items_on_project_item_id"
  end

  create_table "posts", force: :cascade do |t|
    t.string "title"
    t.text "body"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "project_item_employees", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.bigint "project_item_id"
    t.bigint "employee_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["employee_id"], name: "index_project_item_employees_on_employee_id"
    t.index ["project_item_id"], name: "index_project_item_employees_on_project_item_id"
  end

  create_table "project_items", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "name"
    t.uuid "company_id"
  end

  add_foreign_key "employees", "companies"
  add_foreign_key "project_item_employees", "employees"
  add_foreign_key "project_item_employees", "project_items"
end