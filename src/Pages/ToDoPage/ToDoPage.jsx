import { GrAdd } from 'react-icons/gr';
import './ToDoPage.css';

const ToDoPage = () => {

    const currentDay = { weekday: 'long' };
    const currentDayName = new Date().toLocaleString('en-US', currentDay);

    const showLocalTime = () => {
        const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const timeElement = document.getElementById('current-time');
        const options = { timeZone: userTimeZone, hour: 'numeric', minute: 'numeric', second: 'numeric' };

        const updateTime = () => {
            const currentTime = new Date().toLocaleString('en-US', options);

            if (timeElement) {
                timeElement.textContent = currentTime;
            }
        };
        updateTime();
        setInterval(updateTime, 1000);
    };
    showLocalTime();


    return (
        <>
            <div className="bg-slate-100 px-6 py-3 flex items-center justify-between">
                <h4 className="text-3xl bg-gradient-to-r from-[#c9b501] via-[#E80040] to-[#c9b501] text-transparent bg-clip-text">Task Spark</h4>
                <p id='current-time' className='text-2xl text-[#E80040]'></p>
                <h4 className="text-2xl hidden md:block">Welcome, Md Selim Hossain</h4>
            </div>
            <div className="my-5 flex items-center justify-center gap-8 px-5 md:px-0">
                <h1 className="text-5xl">
                    Add <span className="text-[#c9b501]">{currentDayName}</span> schedule
                </h1>
                <div className="">
                    <button className='px-8 py-6 bg-[#E80040] hover:bg-[#c9b501] task-add-btn'><GrAdd size={'20px'} /></button>
                </div>
            </div>
            <div className="">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="hover">
                                <th>1</th>
                                <td>Hart Hagerty</td>
                                <td>Desktop Support Technician</td>
                                <td>Pending</td>
                                <td>
                                    
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default ToDoPage;