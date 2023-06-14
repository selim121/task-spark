import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Details from "../Pages/Home/ImportantOfTaskManagement/Details";

const router = createBrowserRouter( [
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'why-do-we-need-task-management',
                element: <Details />
            }
        ]
    }
])

export default router;