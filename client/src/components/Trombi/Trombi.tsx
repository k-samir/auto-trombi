import { Empty } from "antd";
import uuid from "react-uuid";
import { Group } from "../../models/Group";
import { SubGroup } from "../../models/SubGroup";
import MemberItem from "../MemberItem/MemberItem";

type Props = {
  selectedGroup: Group;
  selectedSubGroup: SubGroup;
  refetch: () => void;
};
const Trombi = (props: Props) => {
  const { selectedGroup, selectedSubGroup, refetch } = props;

  return (
    <div className="sm:w-[70%] rounded-box border border-1">
      <div className="pl-5 text-sm breadcrumbs bg-base-200/40">
        <ul>
          <li>{selectedSubGroup.parent}</li>
          <li>{selectedSubGroup.name}</li>
        </ul>
      </div>

      <div className="flex flex-wrap gap-7 justify-center  p-5 ">
      

        {selectedSubGroup.membersId?.map((id: string) => (
          <MemberItem
            key={uuid()}
            refetch={refetch}
            groupId={selectedGroup.id}
            subGroupId={selectedSubGroup.id}
            memberId={id}
          />
        ))}


        {selectedSubGroup.membersId?.length === 0 && (
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} className="border px-9 py-12"/>
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
