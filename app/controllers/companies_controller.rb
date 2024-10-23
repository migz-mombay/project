class CompaniesController < ApplicationController
    def index
        @companies = Company.all
        render json: {
            data: @companies,
        }, status: :ok
    end

    def create
        @company = Company.new(company_params)
    
        if @company.save
            render json: {
                data: @company,
            }, status: :created
        else
            render json: {
                errors: @company.errors.full_messages,
            }, status: :unprocessable_entity
        end
    end

    def show
        set_company

        render json: {
            data: @company.as_json(),
            project: @company.project_items.as_json()
        }
    end

    private
        def company_params
            params.require(:company).permit(:name)
        end

        def set_company
            @company = Company.find(params[:id])
        end

end