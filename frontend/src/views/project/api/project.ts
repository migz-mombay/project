import axios from "axios";

const PROJECT_API_PATH = '/api/projects';

export const getProjects = async () => {
    const response = await axios.get(PROJECT_API_PATH);
    return response.data;
}

export const getProject = async (projectId: string) => {
    const response = await axios.get(`${PROJECT_API_PATH}/${projectId}`);
    return response.data
}