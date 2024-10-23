import { getProjects, getProject} from "../api/project";
import { useQuery } from "@tanstack/react-query";

export const useProjects = () => {
    return useQuery({
        queryKey: ['projectsList'],
        queryFn: getProjects,
    })
}

export const useProject = (projectId: string) => {
    return useQuery({
        queryKey: ['projectData', projectId],
        queryFn: () => getProject(projectId),
    })
}