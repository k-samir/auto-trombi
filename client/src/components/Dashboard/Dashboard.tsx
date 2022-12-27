import { useEffect, useState } from "react";
import useGetGroups from "../../api/UseGetGroups";
import SelectedGroup from "../../contexts/SelectedGroup";
import SelectedSubGroup from "../../contexts/SelectedSubGroup";
import { Group } from "../../models/Group";
import { SubGroup } from "../../models/SubGroup";
import Groups from "../Groups/Groups";
import ListMembers from "../ListMembers/ListMembers";
import Trombi from "../Trombi/Trombi";
import "./Dashboard.scss";

const Dashboard = () => {
  const [selectedGroup, setSelectedGroup] = useState<Group>({} as Group);
  const [selectedSubGroup, setSelectedSubGroup] = useState<SubGroup>({} as SubGroup);

  const [groups, refetch] = useGetGroups(setSelectedGroup, setSelectedSubGroup);

  useEffect(() => {

    
    if (!selectedSubGroup.id && !selectedGroup.id && groups[0]) {
      setSelectedGroup(groups[0]);
      setSelectedSubGroup(groups[0].subGroups[0]);
    }
    if(selectedGroup.id && selectedSubGroup.id){
      setSelectedGroup(groups.find((group:Group) => group.id === selectedGroup.id) as Group);
      setSelectedSubGroup(groups.find((group:Group) => group.id === selectedGroup.id)?.subGroups.find((subGroup:SubGroup) => subGroup.id === selectedSubGroup.id) as SubGroup);
    }
  }, [groups]);

  const refresh = () => {
    refetch({});
  }
  
  return (
    <SelectedGroup.Provider value={{ selectedGroup, setSelectedGroup }}>
      <SelectedSubGroup.Provider
        value={{ selectedSubGroup, setSelectedSubGroup }}
      >
        <div className="flex flex-1 px-2 pt-2">
          {selectedGroup && selectedSubGroup && (
            <>
              <Groups
                groups={groups}
                refetch={refresh}
              />
              <Trombi
                refetch={refresh}
              />
              <ListMembers selectedSubGroup={selectedSubGroup as SubGroup} />
            </>
          )}
        </div>
      </SelectedSubGroup.Provider>
    </SelectedGroup.Provider>
  );
};

export default Dashboard;
