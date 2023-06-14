/* eslint-disable react/prop-types */
const Button = ({label}) => {
    return (
        <button
            className="bg-[#c9b501] px-4 py-2 text-white uppercase font-semibold tracking-wider rounded-lg hover:bg-[#E80040]">
            {label}
        </button>
    );
};

export default Button;