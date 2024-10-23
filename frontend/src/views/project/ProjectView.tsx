import { useParams } from "react-router-dom"
import { useProject } from "./hooks/useProject"
import { NavLink } from "react-router-dom"
import { Employee } from "../../types/Employee"


export const ProjectView = () => {
    const {projectId} = useParams() as {projectId: string}
    const {data: projectRaw, error, isLoading} = useProject(projectId)
    if (isLoading) return <div>Loading data...</div>
    if (error) {
        return(
            <>Something went wrong...</>
        )
    }

    return(
        <>  
            <NavLink to="/projects" className="block w-1/3 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                Back to list
            </NavLink>
            <section className="bg-white dark:bg-gray-900 p-12">
                <h1 className="font-bold text-2xl mb-3">Project ID</h1>
                <p>{projectRaw.data.id}</p>
                <h1 className="font-bold text-2xl my-3">Project Name</h1>
                <p>{projectRaw.data.name}</p>
                <h1 className="font-bold text-2xl my-3">Employees</h1>
                {projectRaw.employee.map((employee: Employee, index: number)=> {
                    return(<p key={index}>{employee.first_name} {employee.last_name}</p>)
                })}
            </section>

            
        </>
    )
}