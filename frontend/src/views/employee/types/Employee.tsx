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
    company_id: 'ba359df3-f5ac-40f7-a4c0-666ffcdc73b1',
    first_name: '',
    middle_name: '',
    last_name: '',
    email: '',
    job_title: '',
}