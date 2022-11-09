import { ReactNode } from "react";
import { FaGithub, FaSignInAlt } from "react-icons/fa";
import { TiUserAdd } from "react-icons/ti";
import { Link } from "react-router-dom";

import "./NavBar.scss";

interface Props {
  children: ReactNode;
}

const NavBar = (props: Props) => {
  const children = props.children;

  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="navbar bg-primary rounded-b-lg md:w-[75%] self-center">
          <div className="navbar-start">
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>

            <Link to="/" className="px-4 normal-case text-lg font-comfortaa text-white whitespace-nowrap">auto-trombi</Link>
          </div>
          <div className="navbar-center hidden lg:flex"></div>

          <div className="navbar-end gap-5 px-4  ">
            <div className=" self-center hidden lg:flex gap-5">
            <Link to="/login" className="border-0 text-white hover:bg-transparent hover:text-white/40 capitalize text-md py-1">Sign in</Link>
            <Link to="/signup" className=" text-white border-[1px] rounded-md hover:bg-white/40 capitalize px-2 py-1">Sign up</Link>
            </div>
            <a className="flex self-center" href="https://github.com/k-samir/auto-trombi">
              <FaGithub size={33} color="white" />
            </a>
          </div>
        </div>
        {children}
      </div>

      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay">
          <div className="absolute top-0 left-0 h-full w-72 bg-base-100 flex flex-col">
            <ul className="menu p-4 gap-2">
              <li><Link to="/login" className="btn bg-primary text-white"> <FaSignInAlt/> Sign in</Link></li>
              <li><Link to="/signup" className="btn bg-primary text-white"> <TiUserAdd/> Sign up</Link></li>
            </ul>
          </div>
        </label>
      </div>
    </div>
  );
};

export default NavBar;
