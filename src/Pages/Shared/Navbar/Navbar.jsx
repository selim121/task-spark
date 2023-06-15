import { Link } from "react-router-dom";
import { FiPhoneCall } from 'react-icons/fi';

const Navbar = () => {
    return (
        <>
            <div className="bg-slate-100 flex justify-between items-center px-8 py-4 w-full">
                <Link to={'/'}><h4 className="text-3xl bg-gradient-to-r from-[#c9b501] via-[#E80040] to-[#c9b501] text-transparent bg-clip-text">Task Spark</h4></Link>
                <div className="flex items-center gap-4">
                    <FiPhoneCall color="#E80040" size={'20px'} />
                    <p className="text-[#c9b501] text-xl font-semibold">+8801773407976</p>
                </div>
            </div>
        </>
    );
};

export default Navbar;