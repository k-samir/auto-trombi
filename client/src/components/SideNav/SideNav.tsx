import { useContext } from "react";
import { BiLogOut } from "react-icons/bi";
import { FaSignInAlt, FaUserCircle } from "react-icons/fa";
import { TiUserAdd } from "react-icons/ti";
import { Link } from "react-router-dom";
import Auth from "../../contexts/Auth";

type Props = {
  toggleSideVisibility: () => void;
  handleLogOut: () => void;
}

const SideNav = (props:Props) => {
  
  const {toggleSideVisibility,handleLogOut} = props;
  const { isAuthenticated } = useContext(Auth);
  
  return (
    <div className="drawer-side ">

    <label htmlFor="my-drawer-3" className="drawer-overlay">
      <div className="absolute top-0 left-0 h-full w-72 bg-base-100 flex flex-col">
        <ul className="menu p-4 gap-2">
          {(!isAuthenticated && (
            <>
              <li>
                <Link
                  to="/login"
                  className="btn bg-primary text-white"
                  onClick={toggleSideVisibility}
                >
                  {" "}
                  <FaSignInAlt /> Sign in
                </Link>
              </li>
              <li>
                <Link
                  to="/signup"
                  className="btn bg-primary text-white"
                  onClick={toggleSideVisibility}
                >
                  <TiUserAdd /> Sign up
                </Link>
              </li>
            </>
          )) || (
            <>
              <li>
                <Link
                  to="/profile"
                  className="btn bg-primary text-white"
                  onClick={toggleSideVisibility}
                >
                  {" "}
                  <FaUserCircle /> Profile
                </Link>
              </li>
              <li>
                <button
                  className="btn bg-primary text-white"
                  onClick={handleLogOut}
                >
                  {" "}
                  <BiLogOut /> Log out
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </label>
    </div>
  );
};

export default SideNav;