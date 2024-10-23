import { getCompanies, getCompany} from "../api/company";
import { useQuery } from "@tanstack/react-query";

export const useCompanies = () => {
    return useQuery({
        queryKey: ['compaiesList'],
        queryFn: getCompanies,
    })
}

export const useCompany = (companyId: string) => {
    return useQuery({
        queryKey: ['companyData', companyId],
        queryFn: () => getCompany(companyId),
    })
}