import { useEffect, useState } from "react";
import useGetGroups from "../../api/UseGetGroups";
import { Group } from "../../models/Group";
import { SubGroup } from "../../models/SubGroup";
import Groups from "../Groups/Groups";
import ListMembers from "../ListMembers/ListMembers";
import Trombi from "../Trombi/Trombi";
import "./Dashboard.scss";

const Dashboard = () => {
  const [groups, refetch] = useGetGroups();

  const [selectedGroup, setSelectedGroup] = useState<Group>({} as Group);
  const [selectedSubGroup, setSelectedSubGroup] = useState<SubGroup>(
    {} as SubGroup
  );

  useEffect(() => {
    if (groups[0] && !Object.entries(selectedGroup).length) {
      let tmp: any;
      if (groups[0].subGroups[0]) {
        tmp = groups[0].subGroups[0];
        setSelectedGroup(groups[0]);
        setSelectedSubGroup(tmp);
      } else {
        tmp = groups[0];
        setSelectedGroup(tmp);
      }
    } else {
      if (selectedGroup && selectedSubGroup) {
        const tmp = groups
          .find((group: Group) => group.id == selectedGroup.id)
          ?.subGroups.find((subgroup) => subgroup.id == selectedSubGroup.id);
        if (tmp) {
          setSelectedSubGroup(tmp);
        }
      }
    }
  }, [groups]);

  const handleSelect = (group: Group, subgroup: SubGroup) => {
    setSelectedGroup(group);
    setSelectedSubGroup(subgroup);
  };

  return (
    <div className="flex flex-1 px-2 pt-2">
      <Groups
        groups={groups}
        selectedSubGroup={selectedSubGroup as SubGroup}
        handleSelectedChange={handleSelect}
        refetch={() => refetch({})}
      />
      <Trombi
        refetch={() => refetch({})}
        selectedGroup={selectedGroup as Group}
        selectedSubGroup={selectedSubGroup as SubGroup}
      />
      <ListMembers selectedSubGroup={selectedSubGroup as SubGroup} />
    </div>
  );
};

export default Dashboard;
