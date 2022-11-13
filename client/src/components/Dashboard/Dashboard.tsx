import { useState } from "react";
import useGetGroups from "../../api/UseGetGroups";
import { Group } from "../../models/Group";
import Groups from "../Groups/Groups";
import ListUsers from "../ListUsers/ListUsers";
import Trombi from "../Trombi/Trombi";
import "./Dashboard.scss";

const Dashboard = () => {
  const groups: Group[] = useGetGroups();
  const [selectedGroup,setSelectedGroup] = useState<string>("");
  return (
    <div className="flex flex-1 px-2 pt-2">
      <Groups groups={groups} />
      <Trombi />
      <ListUsers />
     
    </div>
  );
};

export default Dashboard;
