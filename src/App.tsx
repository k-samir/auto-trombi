import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Dashboard from "./components/Dashboard/Dashboard";
import Index from "./components/Index/Index";
import Login from "./components/Login/Login";
import NavBar from "./components/NavBar/NavBar";
import SignUp from "./components/SignUp/SignUp";

const App = () => {
  return (
    <div className="flex justify-center">
      <NavBar>
      <div className="flex flex-1">
        <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/index" element={<Index />} />
        </Routes>
      </div>
      </NavBar>
    </div>
  );
};

export default App;
