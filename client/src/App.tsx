import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import AuthenticatedRoute from "./components/AuthenticatedRoute/AuthenticatedRoute";
import Dashboard from "./components/Dashboard/Dashboard";
import Index from "./components/Index/Index";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import SignUp from "./components/SignUp/SignUp";
import Wrapper from "./components/Wrapper/Wrapper";
import Auth from "./contexts/Auth";
import { hasAuthenticated } from "./services/AuthApi";
const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(hasAuthenticated());

  return (
    <Auth.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <div className="flex justify-center">
        <Wrapper>
          <div className="flex flex-1 centered">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/" element={<Index />} />
              
              <Route path="/dashboard" element={<AuthenticatedRoute />}>
                <Route path="/dashboard" element={<Dashboard />} />
              </Route>
              <Route path="/profile" element={<AuthenticatedRoute />}>
                <Route path="/profile" element={<Profile />} />
              </Route>
            </Routes>
          </div>
        </Wrapper>
      </div>
    </Auth.Provider>
  );
};

export default App;
