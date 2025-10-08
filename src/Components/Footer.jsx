import { Link } from "react-router";
import logo from '../assets/logo.png'

const Footer = () => {
    return (
        <>
            <div className=" bg-neutral text-white p-8">
                <div className="max-w-7xl mx-auto ">
                    <Link className="flex justify-between" to='/'>
                        <div className="flex  items-center gap-2">
                            <img className="w-[50px] " src={logo} alt="image" />
                            <span className="text-[#632EE3] font-bold text-xl">HERO.IO</span>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl">Social Links</h3>
                            <div className="flex gap-3 ">
                                <i className="fa-brands fa-linkedin"></i>
                                <i className="fa-brands fa-x-twitter"></i>
                                <i className="fa-brands fa-facebook"></i>

                            </div>
                        </div>
                    </Link>
                </div>
            <hr className="border-b-1 mt-8 border-gray-700" />

            </div>
            <div className="footer sm:footer-horizontal footer-center bg-neutral text-gray-300 p-8">
                <aside>
                    <p>Copyright © 2025 - All right reserved</p>
                </aside>
            </div>
        </>
    );
};

export default Footer;