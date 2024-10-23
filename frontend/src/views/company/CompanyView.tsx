import { useParams } from "react-router-dom"
import { useCompany } from "./hooks/useCompany"
import { NavLink } from "react-router-dom"
import { Projects } from "../../types/Projects"


export const CompanyView = () => {
    const {companyId} = useParams() as {companyId: string}
    const {data: companyRaw, error, isLoading} = useCompany(companyId)

    if (isLoading) return <div>Loading data...</div>
    if (error) {
        return(
            <>Something went wrong...</>
        )
    }

    return(
        <>  
            <NavLink to="/companies" className="block w-1/3 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                Back to list
            </NavLink>
            <section className="bg-white dark:bg-gray-900 p-12">
                <h1 className="font-bold text-2xl mb-3">Company ID</h1>
                <p>{companyRaw.data.id}</p>
                <h1 className="font-bold text-2xl my-3">Company Name</h1>
                <p>{companyRaw.data.name}</p>
                <h1 className="font-bold text-2xl my-3">Projects</h1>
                {companyRaw.project.map((data: Projects, index: number)=> {
                    return(<p key={index}>{data.name}</p>)
                })}
            </section>
        </>
    )
}