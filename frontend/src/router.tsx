import { createBrowserRouter } from "react-router-dom";
import App from "./App";

import EmployeesIndex from "./views/employee/EmployeesIndex";
import { EmployeeNew } from "./views/employee/EmployeeNew";
import { EmployeeUpdate } from "./views/employee/EmployeeUpdate";

import CompanyIndex from "./views/company/CompanyIndex";
import { CompanyView } from "./views/company/CompanyView";

import ProjectIndex from "./views/project/ProjectIndex"
import { ProjectView } from "./views/project/ProjectView"
import Home from "./views/index/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            { path: '', element: <Home/>}, 
            {
                path: '/employees',
                children: [
                    {path: '', element: <EmployeesIndex/>},
                    {path:'new', element: <EmployeeNew/>},
                    {path:':employeeId', element: <EmployeeUpdate/>}
                ]
                
            },
            {
                path: '/companies',
                children: [
                    {path: '', element: <CompanyIndex/>},
                    {path: ':companyId', element: <CompanyView/>}
                ]
            },
            {
                path: '/projects',
                children: [
                    {path: '', element: <ProjectIndex/>},
                    {path: ':projectId', element: <ProjectView/>}
                ]
            },
        ]

    }
])

export default router