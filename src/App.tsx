import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Dashboard from "./components/Dashboard/Dashboard";
import Index from "./components/Index/Index";
import Login from "./components/Login/Login";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import SignUp from "./components/SignUp/SignUp";

const App = () => {

  return (
      <div className="flex justify-center">
        <NavBar>
          <div className="flex flex-1 centered">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/" element={<Index />} />

              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
            </div>
        </NavBar>
    </div>
  );
};

export default App;
