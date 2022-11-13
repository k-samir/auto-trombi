import { Menu, Transition } from "@headlessui/react";
import { Fragment, useContext } from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { FaGithub, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import useGetLoggedUser from "../../api/UseGetLoggedUser";
import Auth from "../../contexts/Auth";
import { User } from "../../models/User";
import "./NavBar.scss";

type Props = {
  handleLogOut: () => void;
};
const NavBar = (props: Props) => {
  const { handleLogOut } = props;

  const { isAuthenticated } = useContext(Auth);

  const user: User = useGetLoggedUser();

  return (
    <div className="sm:sticky top-0 z-50 navbar bg-primary rounded-b-lg md:w-[82%] lg:w-[70%] self-center ">
      <div className="navbar-start">
        <div className="flex-none md:hidden">
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

        <Link
          to="/"
          className="px-4 normal-case text-lg font-comfortaa text-white whitespace-nowrap"
        >
          auto-trombi
        </Link>
      </div>
      <div className="navbar-center hidden md:flex"></div>

      <div className="navbar-end px-4">
        <div className="self-center hidden md:flex gap-3">
        <a
            href="https://github.com/k-samir/auto-trombi"
            className="rounded-lg bg-base-100 p-1 "
          >
            <FaGithub size={32} color="white" />
          </a>

          <label className="rounded-lg bg-base-100 p-[5px] swap swap-rotate h-fit w-fit self-center hover:bg-white/80 fill-primary-content hover:fill-neutral-focus">
            <input type="checkbox" />
            <svg
              className="swap-on  w-[30px] h-[30px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>
            <svg
              className="swap-off  w-[30px] h-[30px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>

          {(!isAuthenticated && (
            <>
              <Link
                to="/login"
                className="text-white border-[1px] rounded-md hover:bg-white/40 capitalize px-2 flex flex-1  whitespace-nowrap items-center	"
              >
                Sign in
              </Link>

              <Link
                to="/signup"
                className=" text-white border-[1px] rounded-md hover:bg-white/40 capitalize px-2 py-1 flex flex-1 whitespace-nowrap items-center"
              >
                Sign up
              </Link>
            </>
          )) || (
            <>
              {" "}
              <Link to="/dashboard" className="rounded-lg bg-base-100 p-1">
                <AiOutlineDashboard
                  size={33}
                  color="white"
                  className="self-center"
                />
              </Link>
              <Menu as="div" className="relative text-left">
                <div className="flex gap-3">
                  <span className="self-center">
                    {user ? user.firstname : ""} {user ? user.lastname : ""}
                  </span>
                  <Menu.Button>
                    <div className="avatar online placeholder">
                      <div className="bg-base-100 text-neutral-content rounded-full hover:text-black p-1 hover:bg-white/80 w-[40px]">
                        <span className="text-md">
                          {user.firstname ? user.firstname.charAt(0) : ""}
                          {user.lastname ? user.lastname.charAt(0) : ""}
                        </span>
                      </div>
                    </div>
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="px-1 py-1 ">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/profile"
                            className={`${
                              active
                                ? "bg-violet-500 text-white"
                                : "text-gray-900"
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                          >
                            {active ? (
                              <FaUserCircle
                                className="mr-2 h-5 w-5"
                                aria-hidden="true"
                              />
                            ) : (
                              <FaUserCircle
                                className="mr-2 h-5 w-5"
                                aria-hidden="true"
                              />
                            )}
                            Profile
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            onClick={handleLogOut}
                            className={`${
                              active
                                ? "bg-violet-500 text-white"
                                : "text-gray-900"
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                          >
                            {active ? (
                              <BiLogOut
                                className="mr-2 h-5 w-5"
                                aria-hidden="true"
                              />
                            ) : (
                              <BiLogOut
                                className="mr-2 h-5 w-5"
                                aria-hidden="true"
                              />
                            )}
                            Log out
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
