import { Link } from "react-router-dom";
import Button from "../../../components/Button/Button";

const Navbar = () => {
    return (
        <>
            <div className="bg-slate-100 flex justify-between items-center px-8 py-4 fixed w-full">
                <Link to={'/'}><h4 className="text-3xl bg-gradient-to-r from-[#c9b501] via-[#E80040] to-[#c9b501] text-transparent bg-clip-text">Task Spark</h4></Link>
                <Button label={'Sign In'} />
            </div>
        </>
    );
};

export default Navbar;