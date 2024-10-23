class ProjectItemEmployeesController < ApplicationController
    def show
        # /api/projects/:id
        set_project_item

        employees = Employee
            .where(project_id: something)

        render json: {
            data: employees.to_json
        }, status: :ok
        # 
    end

    private
        def set_project_item
            @project_item_employees = ProjectItemEmployee.where(project_item_id: params[:id])
        end
end