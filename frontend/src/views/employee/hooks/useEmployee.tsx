import { getEmployees, createEmployee, getEmployee, updateEmployee, deleteEmployee } from "../api/employee";
//import { Employee } from "../../../types/Employee"
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { EmployeeFormRequest } from "../types/Employee";
import { Employee } from "../../../types/Employee";

export const useEmployees = () => {
    return useQuery({
        queryKey: ['employeesList'],
        queryFn: getEmployees,
    })
}

export const useEmployee = (employeeId: string) => {
    return useQuery({
        queryKey: ['employeeData', employeeId],
        queryFn: () => getEmployee(employeeId),
    })
}

export const useCreateEmployee = () => {
    return useMutation({
        mutationFn: (req: EmployeeFormRequest) => createEmployee(req)
    });
}

export const useUpdateEmployee = (employeeId: string) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (req: EmployeeFormRequest) => updateEmployee(employeeId, req),
        onSuccess: (data: { data: Employee}) => {
            const employee = data.data;
            queryClient.setQueryData(['employeeData', employeeId], employee)
        }
    })

}

export const useDeleteEmployee = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (employeeId: string) => deleteEmployee(employeeId),
        onSuccess: async () => {
            const employees = await getEmployees();
            queryClient.setQueryData(['employeesList'], employees)
        }
    });
}