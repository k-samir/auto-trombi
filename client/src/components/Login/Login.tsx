import { BaseSyntheticEvent, useContext, useEffect, useState } from "react";
import { FaEye, FaLock, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Auth from "../../contexts/Auth";
import { User } from "../../models/User";
import { login } from "../../services/AuthApi";

import "./Login.scss";

const Login = () => {
  const [user, setUser] = useState<any>({});

  const { isAuthenticated, setIsAuthenticated } = useContext(Auth);
  const [loginError, setLoginError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  
  useEffect(() => {
    if (isAuthenticated) {
      try {
        navigate("/dashboard");
      } catch ({ response }) {
      }
    }
  }, []);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    try {
      setIsLoading(true);
      setLoginError("");

      const response = await login(user);
      setIsLoading(false);
      if (response == true) {
        setIsAuthenticated(true);
        setLoginError("");
        navigate("/dashboard");
      } else {
        setIsAuthenticated(false);
        setLoginError(response);
      }
    } catch ({ response }) {
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

  const togglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };
  

  return (
    <div className="self-center text-center rounded-lg  w-fit h-fit flex flex-col p-16 pt-12 gap-5 border border-1 bg-neutral-content">
      <h1 className="font-comfortaa font-extrabold text-neutral">Sign In</h1>
      <form
        className="flex flex-col w-fit gap-2 self-center"
        onSubmit={handleSubmit}
      >
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
              type={passwordVisible ? "text" : "password"} 
              name="password"
              placeholder="Password"
              className="input input-bordered input-md"
              onChange={handleChange}              
            />
            <button type="button" onClick={togglePassword} className="btn btn-primary"> <FaEye className="flex self-center"/></button>

          </label>
        </div>

        <button
          className={`btn btn-primary ${isLoading ? "loading" : ""}`}
          type="submit"
        >
          Log In
        </button>
      </form>

      {loginError != "" && (
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
            <span>{loginError}</span>
          </div>
        </div>
      )}

      <div className="divider m-0">OR</div>
      <div className=" text-neutral flex gap-2 flex-1 self-center">
        <p>Need an account?</p>
        <a className="link text-primary" href="/signup">
          SIGN UP
        </a>
      </div>
    </div>
  );
};

export default Login;
