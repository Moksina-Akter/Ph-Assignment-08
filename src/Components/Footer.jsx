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
           <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
        </>
    );
};

export default Footer;