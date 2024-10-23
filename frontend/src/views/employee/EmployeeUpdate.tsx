import { useEffect, useState } from "react";
import { useUpdateEmployee, useEmployee } from "./hooks/useEmployee";
import { defaultEmployeeForm, EmployeeFormRequest, EmployeeFormTypes } from "./types/Employee";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const EmployeeUpdate: React.FC = () => {
    const { employeeId } = useParams() as {employeeId: string}
    const {data: employeeRaw, error, isLoading} = useEmployee(employeeId)
    const [formData, setFormData] = useState<EmployeeFormTypes>(defaultEmployeeForm);
    const [isEditing, setIsEditing] = useState(false);
    const employeeCreateRequestData: EmployeeFormRequest = { employee: formData}
    const navigate = useNavigate();

    const mutation = useUpdateEmployee(employeeId);

    useEffect(() => {
        if (!employeeRaw?.data) return;

        const employeeData = employeeRaw.data;
        setFormData(employeeData);
    }, [employeeRaw])

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Handle form submission
        mutation.mutate(employeeCreateRequestData);
        console.log("this is triggering")
        setIsEditing((prev)=> !prev) 
    };

    const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    const handleCancel = () => {
        navigate('/employees')
    }

    const toggleEdit = (event: React.FormEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setIsEditing((prev)=> !prev) 
        console.log(isEditing)
    }
    
    if (isLoading) return <div>Loading data...</div>
    if (error) {
        return(
            <>Something went wrong...</>
        )
    }

    return(
        <>
            <section className="bg-white dark:bg-gray-900">
                <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
                    <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Employee Data</h2>
                    <form onSubmit={handleSubmit}>
                    <div className="grid gap-4 mb-4 sm:grid-cols-3 sm:gap-6 sm:mb-5">
                        <div className="w-full">
                            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                            <input
                                type="text"
                                name="first_name"
                                id="first_name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                value={formData.first_name}
                                onChange={handleFormChange}
                                placeholder="Ex: Juan"
                                disabled={!isEditing}
                                required
                            />
                        </div>
                        <div className="w-full">
                            <label htmlFor="middle_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Middle Name</label>
                            <input
                                type="text"
                                name="middle_name"
                                id="middle_name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                value={formData.middle_name}
                                onChange={handleFormChange}
                                placeholder="Ex: Cena"
                                disabled={!isEditing}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                            <input
                                type="text"
                                name="last_name"
                                id="last_name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                value={formData.last_name}
                                onChange={handleFormChange}
                                placeholder="Ex: Cruz"
                                disabled={!isEditing}
                                required
                            />
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="email" className="block mb-2 text-sm text-left font-medium text-gray-900 dark:text-white">Email</label>
                            <input
                                type="text"
                                name="email"
                                id="email"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                value={formData.email}
                                onChange={handleFormChange}
                                placeholder="juan.cena@email.com"
                                disabled={!isEditing}
                                required
                            />
                        </div> 
                        <div className="sm:col-span-3">
                            <label htmlFor="job_title" className="block mb-2 text-sm text-left font-medium text-gray-900 dark:text-white">Job Title</label>
                            <input
                                type="text"
                                name="job_title"
                                id="job_title"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                value={formData.job_title}
                                onChange={handleFormChange}
                                placeholder="Software Developer"
                                disabled={!isEditing}
                                required
                            />
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        
                        { isEditing ?
                            <button
                                type="submit"
                                className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            >
                                Update
                            </button>
                        :
                            <button
                                type="submit"
                                className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                onClick={toggleEdit}
                            >
                                Edit
                            </button>
                        }
                        
                        
                        <button
                            type="button"
                            className="text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                            onClick={handleCancel}
                        >
                            Cancel
                        </button>
                    </div>
                    </form>
                </div>
            </section>
        </>
    );
}