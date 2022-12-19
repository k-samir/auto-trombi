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
            className="rounded-lg p-1 border border-1 group hover:border-black"
          >
            <FaGithub size={32} color="white" className="group-hover:fill-black"/>
          </a>

       

          {(!isAuthenticated && (
            <>
              <Link
                to="/login"
                className="text-white border-[1px] rounded-md hover:/40 capitalize px-2 flex flex-1  whitespace-nowrap items-center	"
              >
                Sign in
              </Link>

              <Link
                to="/signup"
                className=" text-white border-[1px] rounded-md hover:/40 capitalize px-2 py-1 flex flex-1 whitespace-nowrap items-center"
              >
                Sign up
              </Link>
            </>
          )) || (
            <>
              {" "}
              <Link to="/dashboard" className="rounded-lg  p-1 border border-1 group hover:border-black">
                <AiOutlineDashboard
                  size={33}
                  color="white"
                  className="self-center group-hover:fill-black "
                />
              </Link>
              <Menu as="div" className="relative text-left">
                <div className="flex gap-3">
                  <span className="self-center text-white">
                    {user ? user.firstname : ""} {user ? user.lastname : ""}
                  </span>
                  <Menu.Button>
                    <div className="avatar online placeholder">
                      <div className=" text-neutral-content rounded-full border border-1 hover:text-black hover:border-black p-1 w-[40px]">
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
                  <Menu.Items className="bg-white absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="px-1 py-1 ">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/profile"
                            className={`${
                              active
                                ? "bg-primary text-white"
                                : "text-gray-900"
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm `}
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
                                ? "bg-primary text-white"
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
