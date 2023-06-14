
const Footer = () => {

    const getCurrentYear = () => {
        return new Date().getFullYear();
    };
    const currentYear = getCurrentYear();

    return (
        <div className="bg-slate-100 text-center py-6">
            <p className="font-light text-sm">Copyright <span>&copy; {currentYear} - All right reserved by <a className="bg-gradient-to-r from-[#c9b501] via-[#E80040] to-[#c9b501] text-transparent bg-clip-text" href="https://github.com/selim121">Task Spark</a></span></p>
        </div>
    );
};

export default Footer;