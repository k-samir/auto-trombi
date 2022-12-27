import { Empty } from "antd";
import { useContext } from "react";
import uuid from "react-uuid";
import useGetMembers from "../../api/UseGetMembers";
import SelectedGroup from "../../contexts/SelectedGroup";
import SelectedSubGroup from "../../contexts/SelectedSubGroup";
import { Member } from "../../models/Member";
import MemberItem from "../MemberItem/MemberItem";

type Props = {
  refetch: () => void;
  className?: string;
};
const Trombi = (props: Props) => {
  const { refetch,className } = props;
  
  const { selectedGroup, setSelectedGroup } = useContext(SelectedGroup);
  const { selectedSubGroup, setSelectedSubGroup } = useContext(SelectedSubGroup);

  const members = useGetMembers(selectedSubGroup.membersId);

    return (
      <div className={`rounded-md border border-1 ${className}`}>
        <div className="w-full pl-5 text-sm breadcrumbs rounded-t flex flex-1 bg-base-100">
          <ul>
            <li>{selectedSubGroup.parent}</li>
            <li>{selectedSubGroup.name}</li>
          </ul>
        </div>
  
        <div className="flex flex-wrap gap-7 justify-center p-5">
        {members && members.length > 0 && members.map((member:Member) => (
            <MemberItem
              key={uuid()}
              refetch={refetch}
              groupId={selectedGroup.id}
              subGroupId={selectedSubGroup.id}
              member={member}
            />
          ))}
  
          {selectedSubGroup.membersId?.length === 0 && (
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} className="border px-9 py-12 bg-base-100 rounded-md"/>
          )}
  
           <MemberItem
            refetch={refetch}
            key={uuid()}
            groupId={selectedGroup.id}
            subGroupId={selectedSubGroup.id}
          />
        </div>
      </div>
    );
  

 
};

export default Trombi;
