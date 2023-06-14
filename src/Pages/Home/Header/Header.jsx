import headerImg from '../../../assets/header/header.jpg';
import Button from '../../../components/Button/Button';

const Header = () => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center mt-6 md:mt-0">
                <div className="px-3 md:px-0 md:ps-8 space-y-6">
                    <h1 className="text-5xl font-semibold">Task management and lists Tool</h1>
                    <p className="text-justify font-light">
                        We believe that designing products and services in close partnership with our client is the only way to have a real impact on their business.
                    </p>
                    <Button label={'Join Now'} />
                </div>
                <img src={headerImg} className='h-full w-full' />
            </div>
        </>
    );
};

export default Header;