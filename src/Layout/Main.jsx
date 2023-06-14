import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../Pages/Home/Navbar/Navbar";

const Main = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <ScrollRestoration />
        </>
    );
};

export default Main;