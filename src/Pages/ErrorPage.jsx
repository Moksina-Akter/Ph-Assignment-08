// import { useRouteError } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import errorImg from '../assets/error-404.png';
import { Link } from "react-router";


const ErrorPage = () => {
    // const error = useRouteError();

    return <>
        <Navbar />
         <div className='bg-[#F5F5F5] py-20'>
            <div className='flex flex-col justify-center items-center gap-5'>
                <img src={errorImg} alt="" />
                <h1 className='font-bold text-4xl text-center'>Oops, page not found!</h1>
                <p>The page you are looking for is not available.</p>
                <Link to='/' className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-4">Go Back!</Link>
            </div>


        </div>
        <Footer />
    </>
};

export default ErrorPage;