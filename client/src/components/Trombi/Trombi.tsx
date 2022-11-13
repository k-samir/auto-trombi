
import { v4 as uuidv4 } from 'uuid';

const Trombi = () => {
    let array: Array<Number> = new Array(20).fill("hello");

  return (

    <div className=" w-[70%] bg-white">
      <div className="flex flex-wrap gap-8 justify-center  p-5 ">
        {array.map(() => (
          <div key={uuidv4()} className="h-[10rem] w-[10rem] rounded-lg bg-base-100 shadow-xl ">
            <img src="https://placeimg.com/400/225/arch" />
            <div className="flex flex-row">
              <h2 className="">NAME NAME</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trombi;
