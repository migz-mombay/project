import { Company } from "../../../types/Company"
import { useNavigate } from "react-router-dom"

interface TableRowsProps {
    companies: Array<Company>
}

const TableRows: React.FC<TableRowsProps> = ({companies}) => {
    const navigate = useNavigate();
    const handleView = (companyId: string) => {
        navigate(`/companies/${companyId}`);
    }

    
    return(
        <>
        { companies.map((company: Company, index: number)=>{
            return(
            <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <td className="px-6 py-4">
                    {company.name}
                </td>
                <td className="px-6 py-4">
                    <button onClick={() => handleView(company.id)} className="inline-block font-medium text-blue-600 dark:text-blue-500 hover:underline">View</button>
                </td>
            </tr>
            );  
        })}
        </>
    )
}

export default TableRows