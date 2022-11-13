import { useEffect } from "react";
import uuid from 'react-uuid';
import { SubGroup } from "../../models/SubGroup";

type Props = {
  selectedGroup: SubGroup;
};
const Trombi = (props: Props) => {
  const { selectedGroup } = props;
  useEffect(() => {
    console.log(selectedGroup);
  }, []);

  return (
    <div className="sm:w-[70%] rounded-box bg-neutral ">
      <div className="pl-5 text-sm breadcrumbs">
        <ul>
          <li>{selectedGroup.parent}</li>
          <li>{selectedGroup.name}</li>
        </ul>
      </div>

      <div className="flex flex-wrap  gap-7 justify-center  p-5 ">
        {selectedGroup.membersId?.map(() => (
          <div key={uuid()} className="rounded-xl bg-base-content h-40 w-40 ">
            <img
              className="rounded-t-xl "
              src="https://placeimg.com/400/225/arch"
            />
            <div className="flex place-content-center flex-col flex-1  items-center  text-black">
              <h3>lastname</h3>
              <h2>firstname</h2>
              <p> {selectedGroup.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trombi;
