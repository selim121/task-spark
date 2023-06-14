
const Navbar = () => {
    return (
        <>
            <div className="bg-slate-100 flex justify-between items-center px-8 py-4">
                <h4 className="text-3xl bg-gradient-to-r from-[#c9b501] via-[#E80040] to-[#c9b501] text-transparent bg-clip-text">Task Spark</h4>
                <button className="bg-[#c9b501] px-4 py-2 text-white uppercase font-semibold tracking-wider rounded-lg hover:bg-[#E80040]">Sign In</button>
            </div>
        </>
    );
};

export default Navbar;