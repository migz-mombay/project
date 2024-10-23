import axios from "axios";

const COMPANY_API_PATH = '/api/companies';

export const getCompanies = async () => {
    const response = await axios.get(COMPANY_API_PATH);
    return response.data;
}

export const getCompany = async (companyId: string) => {
    const response = await axios.get(`${COMPANY_API_PATH}/${companyId}`);
    return response.data
}