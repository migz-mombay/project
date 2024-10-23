class ProjectItemsController < ApplicationController
    def index
        # GET /api/projects
        @project_items = ProjectItem.all

        render json: {
            data: @project_items.as_json()
        }, status: :ok
    end

    private

        def set_project
            @project_item = ProjectItem.find(params[:name])
        end

        # def project_params
        #     params.require(:employee).permit(:)
        # end
end