import { BaseSyntheticEvent, useContext, useEffect, useState } from "react";
import { FaIdBadge, FaLock, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Auth from "../../contexts/Auth";
import { User } from "../../models/User";

import "./SignUp.scss";
const SignUp = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User>();
  const { isAuthenticated } = useContext(Auth);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    try {
      navigate("/dashboard");
    } catch ({ response }) {
      console.log(response);
    }
  };

  const handleChange = (current: BaseSyntheticEvent) => {
    const { name, value } = current.target;
    let temp: User = {
      ...user,
      [name]: {value},
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
    <div className="self-center justify-center text-center rounded-lg bg-white h-fit w-fit flex flex-col p-16 pt-12 gap-10">
      <h1 className="font-comfortaa font-extrabold text-neutral">Sign Up</h1>

      <form className="flex flex-col flex-1 gap-2" onSubmit={handleSubmit}>
        <div className="flex gap-2">
          <label className="input-group input-group-md">
            <span>
              <FaIdBadge />
            </span>
            <div>
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
              onChange={handleChange}
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
              type="password"
              placeholder="Password"
              className="input input-bordered input-md"
              onChange={handleChange}
              name="password"
            />
          </label>
        </div>

        <button className="btn btn-primary" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
