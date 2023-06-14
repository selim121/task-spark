/* eslint-disable no-unused-vars */
import { useForm } from 'react-hook-form';
import headerImg from '../../../assets/header/header.jpg';
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const { register, handleSubmit, formState: { errors }, } = useForm();
    const navigate = useNavigate();

    const handleUser = data => {
        console.log(data);
        localStorage.setItem('email', data.email);
        navigate('/my-to-do-list')
    }

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center mt-6 md:mt-0">
                <div className="px-3 md:px-0 md:ps-8 space-y-6">
                    <h1 className="text-5xl font-semibold">Task management and lists Tool</h1>
                    <p className="text-justify font-light">
                        We believe that designing products and services in close partnership with our client is the only way to have a real impact on their business.
                    </p>
                    <form onSubmit={handleSubmit(handleUser)}>
                        <div className="mb-4 w-1/2">
                            <input
                                type="email"
                                className={`w-full px-4 py-2 border rounded-lg ${errors.email ? "border-red-500" : ""
                                    }`}
                                placeholder="Enter your email..."
                                {...register("email", { required: "email is required" })}
                            />
                            {errors.email && (
                                <p className="text-red-500">{errors.email.message}</p>
                            )}
                        </div>
                        <input className='bg-[#c9b501] px-4 py-2 text-white uppercase font-semibold tracking-wider rounded-lg hover:bg-[#E80040] cursor-pointer' type="submit" value="Try it free" />
                    </form>
                </div>
                <img src={headerImg} className='h-full w-full' />
            </div>
        </>
    );
};

export default Header;