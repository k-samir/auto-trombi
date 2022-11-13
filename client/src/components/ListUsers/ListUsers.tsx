import { v4 as uuidv4 } from 'uuid';

const ListUsers = () => {
    let array: Array<Number> = new Array(20).fill("hello");

    return ( <div className="w-[20%] ">
    <div className="flex flex-1 flex-col overflow-scroll h-[calc(100vh-75px)]">
    <ul className="menu bg-black flex flex-1  gap-2 text-secondary-content p-2 rounded-box">
      {array.map(() => (
        <li key={uuidv4()} className="flex flex-1 bg-cyan-200 ">
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
  </div>);
}

export default ListUsers;