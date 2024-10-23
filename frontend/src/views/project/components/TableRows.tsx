import { Projects } from "../../../types/Projects"
import { useNavigate } from "react-router-dom"

interface TableRowsProps {
    projects: Array<Projects>
}

const TableRows: React.FC<TableRowsProps> = ({projects}) => {
    const navigate = useNavigate();
    const handleView = (projectId: string) => {
        navigate(`/projects/${projectId}`);
    }

    
    return(
        <>
        { projects.map((project: Projects, index: number)=>{
            return(
            <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <td className="px-6 py-4">
                    {project.name}
                </td>
                <td className="px-6 py-4">
                    <button onClick={() => handleView(project.id)} className="inline-block font-medium text-blue-600 dark:text-blue-500 hover:underline">View</button>
                </td>
            </tr>
            );  
        })}
        </>
    )
}

export default TableRows