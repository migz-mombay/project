import axios from "axios";
import { EmployeeFormRequest } from "../types/Employee";

const EMPLOYEE_API_PATH = '/api/employees';

export const getEmployees = async () => {
    const response = await axios.get(EMPLOYEE_API_PATH);
    return response.data;
}

export const getEmployee = async (employeeId: string) => {
    const response = await axios.get(`${EMPLOYEE_API_PATH}/${employeeId}`);
    return response.data
}

export const createEmployee = async (req: EmployeeFormRequest) => {
    const response = await axios.post(EMPLOYEE_API_PATH, req);
    return response.data;
}

export const updateEmployee = async (employeeId: string, req: EmployeeFormRequest) => {
    const response = await axios.patch(`${EMPLOYEE_API_PATH}/${employeeId}`, req)
    return response.data;
}

export const deleteEmployee = async (employeeId: string) => {
    const response = await axios.delete(`${EMPLOYEE_API_PATH}/${employeeId}`)
    return response.data;
}