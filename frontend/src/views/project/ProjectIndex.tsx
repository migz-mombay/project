import { useProjects } from "./hooks/useProject"
import TableRows from "./components/TableRows";
import HomeButton from "../../components/HomeButton";

export default function ProjectIndex() {
    const {data: projects, error, isLoading} = useProjects();

    if (isLoading) return <div>getting data...</div>
    if (error) {
        return (<div>
            Something went wrong
            {error.message}
        </div>)
    }
    return(
        <>
            <HomeButton/>
            <div className="overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full mt-5 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Company Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <TableRows projects={projects.data} />
                    </tbody>
                </table>
            </div>
        </>
    )
}