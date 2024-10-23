import { Employee } from "../../../types/Employee"
import { useNavigate } from "react-router-dom"
import { useDeleteEmployee } from "../hooks/useEmployee"

interface TableRowsProps {
    employees: Array<Employee>
}

const TableRows: React.FC<TableRowsProps> = ({employees}) => {
    const navigate = useNavigate();
    const handleView = (employeeId: string) => {
        navigate(`/employees/${employeeId}`);
    }

    const mutation = useDeleteEmployee();

    const handleDelete = (employeeId: string) => {
        mutation.mutate(employeeId)
    }
    
    return(
        <>
        { employees.map((employee: Employee, index: number)=>{
            return(
            <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {employee.id}
                </th>
                <td className="px-6 py-4">
                    {employee.first_name} {employee.middle_name} {employee.last_name}
                </td>
                <td className="px-6 py-4">
                    {employee.email}
                </td>
                <td className="px-6 py-4">
                    {employee.job_title}
                </td>
                <td className="px-6 py-4">
                    <button onClick={() => handleView(employee.id)} className="inline-block font-medium text-blue-600 dark:text-blue-500 hover:underline">View</button>
                    <button onClick={() => handleDelete(employee.id)} className="ml-1 inline-block font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</button>
                </td>
            </tr>
            );  
        })}
        </>
    )
}

export default TableRows