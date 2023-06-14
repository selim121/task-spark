import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Details from "../Pages/Home/ImportantOfTaskManagement/Details";
import ToDoPage from "../Pages/ToDoPage/ToDoPage";

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
    },
    {
        path: 'my-to-do-list',
        element: <ToDoPage />
    }
])

export default router;