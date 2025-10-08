
import { Link, NavLink } from 'react-router';
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar max-w-7xl mx-auto ">

        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-[#632EE3] border-b-2 border-[#632EE3]" : "text-black"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/apps"
                   className={({ isActive }) =>
                    isActive ? "text-[#632EE3] border-b-2 border-[#632EE3]" : "text-black"
                  }
                >
                  Apps
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/installation'
                  className={({ isActive }) =>
                    isActive ? "text-[#632EE3] border-b-2 border-[#632EE3]" : "text-black"
                  }
                >
                  Installation
                </NavLink>
              </li>

            </ul>
          </div>
          <Link to='/'>
            <div className="flex items-center gap-2">
              <img className="w-[50px] " src={logo} alt="image" />
              <span className="text-[#632EE3] font-bold text-xl">HERO.IO</span>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">
            <li className='font-semibold'>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-[#632EE3] font-semibold border-b-2 border-[#632EE3]" : "text-black"
                }
              >
                Home
              </NavLink>
            </li>
            <li className='font-semibold'>
              <NavLink
                to="/apps"
                className={({ isActive }) =>
                  isActive ? "text-[#632EE3] font-semibold border-b-2 border-[#632EE3]" : "text-black"
                }
              >
                Apps
              </NavLink>
            </li>
            <li className='font-semibold'>
              <NavLink
                to='/installation'
                className={({ isActive }) =>
                  isActive ? "text-[#632EE3] font-semibold border-b-2 border-[#632EE3]" : "text-black"
                }
              >
                Installation
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a href="https://github.com/Moksina-Akter/Ph-Assignment-08" className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
            <i className="fa-brands fa-github text-2xl"></i>
            <span className="text-white">Contribute</span>
          </a>
        </div></div>

    </div>

  );
};

export default Navbar;