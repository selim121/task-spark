import './Services.css';
import multitask from '../../../assets/icons/multitask.png';
import modify from '../../../assets/icons/modify.png';

const Services = () => {
    return (
        <>
            <div className="text-center py-12">
                <h1 className="text-4xl font-bold">Featured Service that we provide</h1>
            </div>
            <div className="hero services-bg mb-12">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="grid md:grid-cols-6 gap-4 mx-auto py-12">
                    <div className="col md:col-start-3 md:col-end-5">
                        <div className="card h-full w-60 bg-[#c9b501] hover:bg-[#E80040] shadow-xl">
                            <figure><img className='h-36 mt-8' src={multitask} /></figure>
                            <div className="card-body text-center">
                                <h2 className="card-title text-white">
                                    Keep tasks in one place
                                </h2>
                                <p className='text-xs font-light text-white'>Save time, avoid losing work and information, delegate, and track tasks to stay on schedule</p>
                            </div>
                        </div>
                    </div>
                    <div className="col md:col-end-7 md:col-span-2">
                        <div className="card h-full w-60 hover:bg-[#c9b501] bg-[#E80040] shadow-xl">
                            <figure><img className='h-36 mt-8' src={modify} /></figure>
                            <div className="card-body text-center">
                                <h2 className="card-title text-white">
                                    Modify your task
                                </h2>
                                <p className='text-xs font-light text-white'>Now you can manage your tasks with the ability to edit or delete features.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Services;