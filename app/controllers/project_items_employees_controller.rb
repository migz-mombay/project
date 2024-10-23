class ProjectItemsEmployeesController < ApplicationController
    def show_employees
        set_project_item
        @employees = @project_item.employees
        render json: {
            data: @project_item.as_json(),
            employee: @employees.as_json()
        }, status: :ok
    end

    private
    def set_project_item
        @project_item = ProjectItem.find(params[:id])
    end

end

