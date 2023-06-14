import { Link } from 'react-router-dom';
import img from '../../../assets/Others/importantsOfTaskManagement.jpeg';
import Button from '../../../components/Button/Button';

const ImportantOfTaskManagement = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-4 mb-12'>
            <img className='h-full w-full rounded-lg border-8 border-black' src={img} />
            <div className="px-4 md:px-0 md:ms-8 md:me-20 space-y-4">
                <h2 className="text-2xl font-bold">Why do we need task management?</h2>
                <p className="text-xs font-light text-justify">
                    Do you waste time organizing sticky notes, searching your email and apps for to-dos, and figuring out what to work on firs? Then you need one solution to prioritize your tasks, manage your time, and meet your deadlines.
                </p>
                <div>
                    <Link to={'/why-do-we-need-task-management'}><Button label={'Read more'} /></Link>
                </div>
            </div>
        </div>
    );
};

export default ImportantOfTaskManagement;