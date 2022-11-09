import { FaLock, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import "./Login.scss";


const Login = () => {

  const navigate = useNavigate();

  const handleSubmit = async (event:any) => {
    event.preventDefault();
    try {
      navigate("/dashboard");
    } catch ({ response }) {
      console.log(response);
    }
  }

 
  return (
    <div className="self-center text-center rounded-lg bg-white w-fit h-fit flex flex-col p-16 pt-12 gap-10">
      <h1 className="font-comfortaa font-extrabold text-neutral">Sign In</h1>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
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
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
