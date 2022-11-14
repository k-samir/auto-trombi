import { useEffect } from "react";
import uuid from "react-uuid";
import { SubGroup } from "../../models/SubGroup";
import MemberItem from "../MemberItem/MemberItem";

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
        {selectedGroup.membersId?.map((id:string) => (
          <MemberItem key={uuid()} memberId={id}/>
        ))}
        <MemberItem key={uuid()}/>

      </div>
    </div>
  );
};

export default Trombi;
