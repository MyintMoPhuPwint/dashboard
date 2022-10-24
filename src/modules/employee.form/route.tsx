import { Update } from "./entries/update/update";
import { Employee } from "./views/view";

export const employeeRoute = [
    {
        path: '/employee-form',
        element: <Employee />
    },
    {
        path: 'employee-form-edit/:id',
        element: <Update />
    }
]