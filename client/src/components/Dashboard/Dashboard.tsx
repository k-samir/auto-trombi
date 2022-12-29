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
    // select the first subgroup found and its group
    if (!selectedSubGroup.id && !selectedGroup.id) {
      // chercher le premier sous-goupe
      for(let i =0;i<groups.length;i++){
        if (groups[i].subGroups.length > 0) {
          setSelectedGroup(groups[i]);
          setSelectedSubGroup(groups[i].subGroups[0]);
          return;
        }
      }
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
        <div className="flex flex-1 px-2 pt-2 flex-col sm:flex-row">
          {selectedGroup && selectedSubGroup && (
            <>
              <Groups
                groups={groups}
                refetch={refresh}
                className="sm:min-w-[25%] md:min-w-[20%] lg:min-w-[15%]   overflow-auto sm:sticky top-[75px] z-2 scrollbar-hide sm:h-[calc(100vh-75px)] "
              />
              <Trombi
                refetch={refresh}
                className="md:min-w-[50%] lg:min-w-[70%] h-fit"
              />
              <ListMembers className=""/>
            </>
          )}
        </div>
      </SelectedSubGroup.Provider>
    </SelectedGroup.Provider>
  );
};

export default Dashboard;
