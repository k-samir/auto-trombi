import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Index from "./components/Index/Index";
import Login from "./components/Login/Login";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/index" element={<Index />} />
    </Routes>
  );
};

export default App;
