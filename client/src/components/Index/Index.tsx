import { useNavigate } from "react-router";
import "./Index.scss";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="hero">
    <div className="hero-content text-center">
      <div className="max-w-md">
        <h1 className="text-5xl font-bold">Hello there</h1>
        <p className="py-6">Welcome to the auto-trombi application.</p>
        <button className="btn btn-primary" onClick={() => navigate("/login")}>Get Started</button>
      </div>
    </div>
  </div>
  );
};

export default Index;
