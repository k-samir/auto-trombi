import { useNavigate } from "react-router";
import TeamPage from "../../assets/undraw_team_page_re_cffb.svg";
import "./Index.scss";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="my-20">
    <div className="flex hero-content md:gap-52">
      <div className="max-w-md flex flex-col justify-center self align-middle">
        <h1 className="text-5xl font-bold">Hello there</h1>
        <p className="py-6">Welcome to the auto-trombi application.</p>
        <button className="btn btn-primary w-fit" onClick={() => navigate("/login")}>Get Started</button>
      </div>
      <div className="hidden sm:flex">
      <img src={TeamPage} alt="Team Page" />
      </div>
    </div>
  </div>
  );
};

export default Index;
