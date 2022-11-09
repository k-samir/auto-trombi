import { FaIdBadge, FaLock, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import "./SignUp.scss";
const SignUp = () => {
  const navigate = useNavigate();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="centered text-center rounded-lg bg-white h-fit w-fit flex flex-col p-16 pt-12 gap-10">
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
                className="input input-bordered rounded-none rounded-r-lg input-md"
              />
              <input
                required
                type="text"
                placeholder="Last Name"
                className="input input-bordered rounded-none rounded-r-lg input-md"
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
