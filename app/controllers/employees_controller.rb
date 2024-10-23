class EmployeesController < ApplicationController
    def index
        # GET /api/employees
        @employees = Employee.all

        render json: {
            data: @employees.as_json()
        }, status: :ok
    end

    def show
        # GET /api/employees/id
        set_employee
        render json: {
            data: @employee.as_json()
        }

        # handle not being able to find employees
    end

        
    def create
        # POST /api/employees
        @employee = Employee.new(employee_params)
        if @employee.save
            render json: @employee, status: :created
        else
            render json: @employee.errors, status: :unprocessable_entity
        end
    end

    def update
        # PUT /api/employees/id
        set_employee
        @employee.assign_attributes(employee_params)

        if @employee.save
            render json: {
                data: @employee.as_json()
            }, status: :ok
        else
            render json: @employee.errors, status: :unprocessable_entity
        end
    end

    def destroy
        # DEL /api/employees/id
        set_employee
        @employee.destroy
        # handle record not found
    end


    private
        def employee_params
            params.require(:employee).permit(:company_id, :first_name, :middle_name, :last_name, :email, :job_title)
        end

        def set_employee
            @employee = Employee.find(params[:id])
        end
    
end 