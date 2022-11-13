import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import useGetGroups from "../../api/UseGetGroups";
import { Group } from "../../models/Group";
import { SubGroup } from "../../models/SubGroup";
import Groups from "../Groups/Groups";
import ListMembers from "../ListMembers/ListMembers";
import Trombi from "../Trombi/Trombi";
import "./Dashboard.scss";

const Dashboard = () => {
  const groups: Group[] = useGetGroups();
  const navigate = useNavigate();
  const [selectedGroup, setSelectedGroup] = useState({});

  useEffect(() => {
    if (groups[0]) {
      let tmp: any;
      if (groups[0].subGroups[0]) {
        tmp = groups[0].subGroups[0];
        setSelectedGroup(tmp);
      } else {
        tmp = groups[0];
        setSelectedGroup(tmp);
      }
    }
    console.log(selectedGroup);
  }, [groups]);

  return (
    <div className="flex flex-1 px-2 pt-2">
      <Groups groups={groups} selectedGroup={selectedGroup as SubGroup} handleSelectedGroupChange={setSelectedGroup}/>
      <Trombi selectedGroup={selectedGroup as SubGroup}/>
      <ListMembers selectedGroup={selectedGroup as SubGroup}/>
    </div>
  );
};

export default Dashboard;
