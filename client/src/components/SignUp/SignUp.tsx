import { BaseSyntheticEvent, useContext, useEffect, useState } from "react";
import { FaEye, FaIdBadge, FaLock, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Auth from "../../contexts/Auth";
import { Credentials } from "../../models/Credentials";
import { User } from "../../models/User";
import { signup } from "../../services/AuthApi";
import "./SignUp.scss";

const SignUp = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { isAuthenticated, setIsAuthenticated } = useContext(Auth);
  const [signupError, setSignupError] = useState<string>("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      setSignupError("");
      const response = await signup(user);
      setIsLoading(false);

      if (response == true) {
        setIsAuthenticated(true);
        setSignupError("");

        navigate("/dashboard");
      } else {
        setSignupError(response);
        setIsAuthenticated(false);
      }
    } catch ({ response }) {
      //console.log(response);
    }
  };

  const handleChange = (current: BaseSyntheticEvent) => {
    const { name, value } = current.target;
    let temp: User = {
      ...user,
      [name]: { value },
    };

    setUser(temp);
  };

  const handleChangeCredentials = (current: BaseSyntheticEvent) => {
    const { name, value } = current.target;
    let temp: Credentials = {
      ...user.credentials,
      [name]: { value },
    };
    let userTemp = user;
    userTemp.credentials = temp;
    setUser(userTemp);
  };

  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  useEffect(() => {
    if (isAuthenticated) {
      try {
        navigate("/dashboard");
      } catch ({ response }) {
        //console.log(response);
      }
    }
  }, []);

  return (
    <div className="self-center justify-center text-center rounded-lg  h-fit w-fit flex flex-col p-16 pt-12 gap-5 border border-1">
      <h1 className="font-comfortaa font-extrabold text-neutral">Sign Up</h1>

      <form
        className="flex flex-col w-fit self-center flex-1 gap-2"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-1 gap-2">
          <label className="flex flex-1 input-group input-group-md">
            <span>
              <FaIdBadge />
            </span>
            <div className="flex flex-col flex-1 h-24">
              <input
                required
                type="text"
                placeholder="First Name"
                name="firstname"
                className="input input-bordered rounded-none rounded-r-lg input-md"
                onChange={handleChange}
              />
              <input
                required
                type="text"
                name="lastname"
                placeholder="Last Name"
                className="input input-bordered rounded-none rounded-r-lg input-md"
                onChange={handleChange}
              />
            </div>
          </label>

        </div>

        <div className="">
          <label className="input-group input-group-md">
            <span>
              <FaUser />
            </span>

            <input
              required
              type="text"
              placeholder="Username"
              className="input input-bordered input-md"
              onChange={handleChangeCredentials}
              name="username"
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
              onChange={handleChangeCredentials}
            />
            <button
              type="button"
              onClick={togglePassword}
              className="btn btn-primary"
            >
              {" "}
              <FaEye className="flex self-center" />
            </button>
          </label>
        </div>

        <button
          className={`btn btn-primary ${isLoading ? "loading" : ""}`}
          type="submit"
        >
          Sign Up
        </button>
      </form>

      {signupError != "" && (
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
            <span>{signupError}</span>
          </div>
        </div>
      )}

      <div className="divider m-0">OR</div>

      <div className=" text-neutral flex gap-2 flex-1 self-center">
        <p>Already a user?</p>
        <a className="link text-primary" href="/login">
          LOGIN
        </a>
      </div>
    </div>
  );
};

export default SignUp;
