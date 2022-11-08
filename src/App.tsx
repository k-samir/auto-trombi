import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Index from "./components/Index/Index";
import Login from "./components/Login/Login";
import NavBar from "./components/NavBar/NavBar";
import SignUp from "./components/SignUp/SignUp";

const App = () => {
  return (
    <div className="flex justify-center">
      <NavBar>
      <div className="text-center justify-center flex centered">
        <Routes>
        <Route path="/dashboard" element={<Index />} />

          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
      </NavBar>
    </div>
  );
};

export default App;
