export type EmployeeFormTypes = {
    id?: string;
    company_id: string | null;
    first_name: string;
    middle_name: string;
    last_name: string;
    email: string;
    job_title: string;
}


export type EmployeeFormRequest = {
    employee: EmployeeFormTypes;
};

export const defaultEmployeeForm = {
    company_id: '001d5c6c-de1c-4746-bf76-06ed2297041e',
    first_name: '',
    middle_name: '',
    last_name: '',
    email: '',
    job_title: '',
}