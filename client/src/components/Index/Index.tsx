import { useNavigate } from "react-router";
import TeamPage from "../../assets/undraw_team.svg";
import "./Index.scss";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="self-center">
    <div className="flex hero-content md:gap-44">
      <div className="max-w-md flex flex-col">
        <h1 className="text-5xl font-bold text-white">Hello there</h1>
        <p className="py-6 text-white">Welcome to the auto-trombi application.</p>
        <button className="btn btn-primary w-fit my-btn" onClick={() => navigate("/login")}>Get Started</button>
      </div>
      <div className="hidden sm:flex w-[50%]">
      <img src={TeamPage} />
      </div>
    </div>
  </div>
  );
};

export default Index;
