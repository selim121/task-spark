import { GrAdd } from 'react-icons/gr';
import './ToDoPage.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { MdCancel } from 'react-icons/md';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { FcApproval } from "react-icons/fc";
import approval from '../../assets/icons/approval.png';

const ToDoPage = () => {

    const currentDay = { weekday: 'long' };
    const currentDayName = new Date().toLocaleString('en-US', currentDay);
    const addedTime = new Date().toLocaleString('en-Us', {timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone, hour: 'numeric', minute: 'numeric'})

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

    const user = localStorage.getItem('email');
    const { register, handleSubmit, reset } = useForm();
    const [showModal, setShowModal] = useState(false);
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [selectTaskId, setSelectTaskId] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:4000/tasks/${user}`)
            .then(res => res.json())
            .then(data => {
                setTasks(data);
            })
    }, [user])

    const handleAddTask = data => {
        const userEmail = localStorage.getItem('email');
        const { title, description } = data;
        const newData = { email: userEmail, title, description, addedTime: addedTime };
        fetch('http://localhost:4000/taskCollection', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newData)
        })
            .then(res => res.json())
            .then(() => {
                setTasks(prevTasks => [...prevTasks, newData]);
                setShowModal(false);
                reset();
            })

    }

    const handleStatus = async (id) => {
        try {
            const response = await fetch(`http://localhost:4000/task/update/${id}`, {
                method: 'PATCH'
            });
            if (response.ok) {
                const updatedStatus = tasks.find((task) => task._id === id);
                if (updatedStatus) {
                    updatedStatus.status = 'Completed';
                    setTasks([...tasks]);
                }

            } else {
                console.error('Error updating task');
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleIdAndModal = id => {
        setSelectTaskId(id);
        setShowUpdateModal(true);
    }

    const handleUpdateTask = async(data) => {
        console.log(data);
        setShowUpdateModal(false);

        try {
            const response = await fetch(`http://localhost:4000/update/${selectTaskId}`, {
                method: 'PUT',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(data)
            });
            if (response.ok) {
                const updatedTask = tasks.find((task) => task._id === selectTaskId);
                if (updatedTask) {
                    updatedTask.title = data.title;
                    updatedTask.description = data.description
                    setTasks([...tasks]);
                }

            } else {
                console.error('Error updating task');
            }
        }
        catch (error) {
            console.error(error);
        }
    };


    const handleDelete = id => {
        fetch(`http://localhost:4000/task/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(() => {
                setTasks(prevTasks => prevTasks.filter(task => task._id !== id));
            })
    }

    return (
        <>
            <div className="bg-slate-100 px-6 py-3 flex items-center justify-between">
                <Link to={'/'}><h4 className="text-3xl bg-gradient-to-r from-[#c9b501] via-[#E80040] to-[#c9b501] text-transparent bg-clip-text">Task Spark</h4></Link>
                <p id='current-time' className='text-2xl text-[#E80040]'></p>
                <h4 className="text-2xl hidden md:block">Welcome, {user}</h4>
            </div>
            <div className="my-5 flex items-center justify-center gap-8 px-5 md:px-0">
                <h1 className="text-2xl md:text-5xl">
                    Add <span className="text-[#c9b501]">{currentDayName}</span> schedule
                </h1>
                <div className="">
                    <button onClick={() => setShowModal(true)} className='px-8 py-6 bg-[#E80040] hover:bg-[#c9b501] task-add-btn'><GrAdd size={'20px'} /></button>
                    {
                        showModal ? (
                            <>
                                <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                            <div className="flex items-center justify-end p-5 border-b border-solid border-gray-300 rounded-t ">
                                                <button
                                                    className="bg-transparent border-0 text-black float-right"
                                                    onClick={() => setShowModal(false)}
                                                >
                                                    <MdCancel size={'30px'} />
                                                </button>
                                            </div>
                                            <div className="relative p-6 flex-auto">
                                                <form onSubmit={handleSubmit(handleAddTask)}>
                                                    <div className="form-control me-4">
                                                        <label className="label">
                                                            <span className="label-text font-semibold">Title</span>
                                                        </label>
                                                        <input type="text" placeholder='Enter title' className="input input-bordered" {...register("title", { required: true })} />
                                                    </div><div className="form-control me-4">
                                                        <label className="label">
                                                            <span className="label-text font-semibold">Description</span>
                                                        </label>
                                                        <textarea type="text" placeholder="Write description..." className="textarea textarea-bordered textarea-lg w-full" {...register("description", { required: true })} />
                                                    </div>
                                                    <div className="form-control mt-4">
                                                        <input className="py-3 uppercase font-bold text-xl rounded-xl border-0 mt-2 bg-[#dc034158] cursor-pointer" type="submit" value="Add" />
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : null
                    }
                </div>
            </div>
            <div className="">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className='text-center'>
                            <tr>
                                <th>#</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Time</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className='text-center'>
                            {
                                tasks && tasks.map((task, index) => <tr key={task._id} className="hover">
                                    <th>{index + 1}</th>
                                    <td className={task.status === 'Completed' && 'line-through'} >{task.title}</td>
                                    <td>{task.description}</td>
                                    <td>{task.addedTime}</td>
                                    <td className={task.status === 'Completed' ? 'font-light text-green-700' : 'font-light text-orange-400'
                                    }>{task.status ? task.status : 'Pending'}</td>
                                    <td>
                                        <div className="flex justify-center items-center gap-2">
                                            <button onClick={() => handleStatus(task._id)}>
                                                {
                                                    task.status === 'Completed' ? <FcApproval size={'21px'} /> : <img className='h-5 w-5' src={approval} />
                                                }

                                            </button>
                                            <button disabled={task.status === 'Completed'} className='disabled:opacity-50' onClick={() => handleIdAndModal(task._id)}><AiFillEdit size={'25px'} /></button>
                                            {
                                                showUpdateModal ? (
                                                    <>
                                                        <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                                                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                                                    <div className="flex items-center justify-end p-5 border-b border-solid border-gray-300 rounded-t ">
                                                                        <button
                                                                            className="bg-transparent border-0 text-black float-right"
                                                                            onClick={() => setShowUpdateModal(false)}
                                                                        >
                                                                            <MdCancel size={'30px'} />
                                                                        </button>
                                                                    </div>
                                                                    <div className="relative p-6 flex-auto">
                                                                        <form onSubmit={handleSubmit(handleUpdateTask)}>
                                                                            <div className="form-control me-4">
                                                                                <label className="label">
                                                                                    <span className="label-text font-semibold">Title</span>
                                                                                </label>
                                                                                <input type="text" placeholder='Enter title' className="input input-bordered" {...register("title", { required: true })} />
                                                                            </div>
                                                                            <div className="form-control me-4">
                                                                                <label className="label">
                                                                                    <span className="label-text font-semibold">Description</span>
                                                                                </label>
                                                                                <textarea type="text" placeholder="Write description..." className="textarea textarea-bordered textarea-lg w-full" {...register("description", { required: true })} />
                                                                            </div>
                                                                            <div className="form-control mt-4">
                                                                                <input className="py-3 uppercase font-bold text-xl rounded-xl border-0 mt-2 bg-[#dc034158] cursor-pointer" type="submit" value="Update" />
                                                                            </div>
                                                                        </form>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </>
                                                ) : null
                                            }
                                            <button onClick={() => handleDelete(task._id)}><AiFillDelete color='red' size={'25px'} /></button>
                                        </div>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default ToDoPage;