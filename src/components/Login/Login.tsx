import { BaseSyntheticEvent, useContext, useEffect, useState } from "react";
import { FaLock, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Auth from "../../contexts/Auth";
import { User } from "../../models/User";
import { getUser, login } from "../../services/AuthApi";

import "./Login.scss";

const Login = () => {
  const [user, setUser] = useState<User>({});
  const { isAuthenticated, setIsAuthenticated,setConnectedUser } = useContext(Auth);

  const [loginError, setLoginError] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      const response = await login(user);
      if (response){
        setIsAuthenticated(response);
        const connected = getUser(user);
        setConnectedUser(connected!);
        setLoginError(false);
        navigate("/dashboard");
      }
      setIsAuthenticated(response);
      setLoginError(true);
      
    } catch ({ response }) {
      console.log(response);
    }
  };

  const handleChange = (current: BaseSyntheticEvent) => {
    const { name, value } = current.target;
    let temp: User = {
      ...user,
      [name]: value.toString(),
    };
    setUser(temp);
  };

  useEffect(() => {
    if (isAuthenticated) {
      try {
        navigate("/dashboard");
      } catch ({ response }) {
        console.log(response);
      }
    }
  }, []);

  return (
    <div className="self-center text-center rounded-lg bg-white w-fit h-fit flex flex-col p-16 pt-12 gap-10">
      <h1 className="font-comfortaa font-extrabold text-neutral">Sign In</h1>
      <form className="flex flex-col w-fit gap-2 self-center" onSubmit={handleSubmit}>
        <div className="">
          <label className="input-group input-group-md">
            <span>
              <FaUser />
            </span>

            <input
              required
              type="text"
              name="username"
              placeholder="Username"
              className="input input-bordered input-md"
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="">
          <label className="input-group input-group-md">
            <span>
              <FaLock className="flex self-center" />
            </span>

            <input
              required
              type="password"
              name="password"
              placeholder="Password"
              className="input input-bordered input-md"
              onChange={handleChange}
            />
          </label>
        </div>

        <button className="btn btn-primary" type="submit">
          Log In
        </button>

       
      </form>
      {loginError === true && (


          <div className="flex alert alert-error shadow-lg">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current flex-shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>The username or password you entered is incorect.</span>
            </div>
          </div>
        )}
    </div>
  );
};

export default Login;
