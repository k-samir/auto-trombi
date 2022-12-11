import { ReactNode, useContext, useState } from "react";

import Auth from "../../contexts/Auth";
import { logout } from "../../services/AuthApi";
import NavBar from "../NavBar/NavBar";
import SideNav from "../SideNav/SideNav";

import "./Wrapper.scss";

interface Props {
  children: ReactNode;
}

const Wrapper = (props: Props) => {
  const children = props.children;
  const { isAuthenticated, setIsAuthenticated } = useContext(Auth);
  const [sideVisibility, setSideVisibility] = useState<boolean>(false);

  const year = new Date().getFullYear();
  // const loggedUser = UseGetLoggedUser();

  const handleLogOut = () => {
    //setSideVisibility(false);
    logout();
    setIsAuthenticated(false);
  };

  const toggleSideVisibility = () => {
    setSideVisibility(!sideVisibility);
  };

  return (
    <div className="drawer">
      <input
        id="my-drawer-3"
        type="checkbox"
        className="drawer-toggle"
        checked={sideVisibility}
        onChange={toggleSideVisibility}
      />
      <div className="drawer-content flex flex-col">
        <NavBar handleLogOut={handleLogOut} />
        {children}
      
      </div>

      <SideNav
        toggleSideVisibility={toggleSideVisibility}
        handleLogOut={handleLogOut}
      />
    </div>
  );
};

export default Wrapper;
/*  <footer className="footer footer-center p-4  text-base-content">
          <div>
            <p>© {year} - Samir KAMAR</p>
          </div>
        </footer>*/