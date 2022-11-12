import { BiBookAdd } from "react-icons/bi";
import "./Dashboard.scss";

const Dashboard = () => {
  let array: Array<Number> = new Array(20).fill("hello");

  return (
    <div className="flex flex-1 px-2 pt-2">
      <div className="flex w-[20%] items-stretch">
        <ul className="menu menu-compact lg:menu-normal bg-info-content  flex flex-1 p-2 rounded-box">
          <li className="menu-title">
            <span>Category</span>
          </li>
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
          <li>
            <a>Item 3</a>
          </li>
          <div className="divider"></div>
          <li>
            <a className="flex flex-1">
              add class
              <BiBookAdd size={33} />
            </a>
          </li>
        </ul>
      </div>
      <div className=" w-[70%] bg-white">
        <div className="flex flex-wrap gap-8 justify-center  p-5 ">
        {array.map(() => (
          <div className="h-[10rem] w-[10rem] rounded-lg bg-base-100 shadow-xl ">
              <img src="https://placeimg.com/400/225/arch" />
            <div className="flex flex-row">
              <h2 className="">NAME NAME</h2>
            </div>
          </div>
        ))}
        </div>
      </div>
      <div className="w-[20%] ">
        <div className="flex flex-1 flex-col overflow-scroll h-[calc(100vh-75px)]">
        <ul className="menu bg-black flex flex-1  gap-2 text-secondary-content p-2 rounded-box">
          {array.map(() => (
            <li className="flex flex-1 bg-cyan-200 ">
              <div className="flex flex-1 w-full justify-center">
              NAME NAME
              <div className="avatar online">
                <div className="w-10 rounded-full">
                  <img src="https://placeimg.com/192/192/people" />
                </div>
              </div>
              </div>
            </li>
          ))}
        </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
