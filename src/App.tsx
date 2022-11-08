import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Index from "./components/Index/Index";
import Login from "./components/Login/Login";
import { useEffect } from "react";
import { themeChange } from "theme-change";
import { FaGithub } from "react-icons/fa";

const App = () => {
  return (
    <div className="flex justify-center">
      <header className="bg-primary h-14 flex  px-28 w-[80%] rounded-b-lg text-lg">
        <a
          className="flex self-center flex-1 font-comfortaa text-white"
          href="/"
        >
          auto-trombi
        </a>
        <div className="flex flex-1 justify-end gap-8">
          <div className="flex self-center gap-5">
            <a
              href="/"
              className="border-0 text-white hover:bg-transparent hover:text-white/40 capitalize text-md py-1"
            >
              Sign in
            </a>
            <a
              href="/index"
              className="border-solid text-white border-[1px] rounded-md hover:bg-white/40 hover:border-white capitalize h-fit text-md px-2 py-1 "
            >
              Sign up
            </a>
          </div>
          <a
            className="flex self-center"
            href="https://github.com/k-samir/auto-trombi"
          >
            <FaGithub size={33} color="white" />
          </a>
        </div>
      </header>
      <div className="text-center justify-center flex centered">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/index" element={<Index />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
