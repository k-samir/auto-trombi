import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useNavigate } from "react-router";
import TeamPage from "../../assets/undraw_team.svg";
import "./Index.scss";

const Index = () => {
  const navigate = useNavigate();

  const openInNewTab = (url:string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  
  return (
    <div className="flex flex-col justify-between flex-1 w-full">
      <div className="self-center pt-20 flex h-[75%]">
        <div className="flex sm:justify-center sm:gap-20 lg:gap-44 lg:mx-32">
          <div className="flex flex-col items-start self-center">
            <h1 className="text-5xl font-bold text-white font-outline-1">Hello there</h1>
            <p className="py-6 text-white">
              Welcome to the auto-trombi application.
            </p>
            <button
              className="btn btn-primary my-btn"
              onClick={() => navigate("/login")}
            >
              Get Started
            </button>
          </div>

          <div className="hidden sm:flex sm:w-[45%] lg:w-[50%] ">
            <img src={TeamPage} />
          </div>
        </div>
      </div>
      
      <footer className="p-4 bg-white  bg-inherit">
        
        <hr className="my-6 border-primary sm:mx-[10%] lg:my-8" />

        <div className="flex flex-row justify-between mx-10 md:mx-20">
        
          <span className="text-sm self-center text-gray-200 sm:text-center dark:text-gray-200 ">

            <a href="" className="hover:underline">
              Samir KAMAR - 2023            </a>

          </span>
          <div className="flex space-x-6 sm:justify-center sm:mt-0 ">
            <a
                onClick={() => openInNewTab("https://github.com/k-samir")}
              className="text-gray-200 hover:text-gray-900 dark:hover:text-white"
            >
              <FaGithub size={30}  className=""/>
            </a>
            <a
                onClick={() => openInNewTab("https://www.linkedin.com/in/samir-kamar")}
              className="text-gray-200 hover:text-gray-900 dark:hover:text-white"
            >
              <FaLinkedin size={30} />  
            </a>
         </div>
         
         </div> 
       
      </footer>
      </div>
   
  );
};

export default Index;
