import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div className=' bg-[#F5F5F5]'>
            <Navbar />
            <div className=''>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;