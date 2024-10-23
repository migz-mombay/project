
import HomeButton from "../../components/HomeButton";
import TableRows from "./components/TableRows";
import { useEmployees } from "./hooks/useEmployee"
import { NavLink } from "react-router-dom";

export default function EmployeesIndex() {
    const {data: employees, error, isLoading} = useEmployees();

    if (isLoading) return <div>getting data...</div>
    if (error) {
        return (<div>
            Something went wrong
            {error.message}
        </div>)
    }
    
    return(
        <>  
            
            <div className="flex">
                <HomeButton />
                <NavLink to="/employees/new" className="block w-1/3 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                    Create New Employee
                </NavLink>   
            </div>
            <div className="overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full mt-5 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                id
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Full Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Job Title
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <TableRows employees={employees.data} />
                    </tbody>
                </table>
            </div>

        </>
    )
}