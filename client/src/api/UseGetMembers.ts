import { useContext, useEffect, useState } from "react";
import Auth from "../contexts/Auth";
import SelectedGroup from "../contexts/SelectedGroup";
import SelectedSubGroup from "../contexts/SelectedSubGroup";
import { Member } from "../models/Member";
import { getMembers } from "../services/AuthApi";

const useGetMembers = (membersId:string[]) => {
  const [members, setMembers] = useState<Member[]>([]);
  const { isAuthenticated } = useContext(Auth);
  const { selectedGroup } = useContext(SelectedGroup);
  const { selectedSubGroup } = useContext(SelectedSubGroup);


  useEffect(() => {
    
    if (isAuthenticated == true && membersId) {
      getMembers(membersId).then((response: Member[]) => setMembers(response));
    }
  }, [isAuthenticated,selectedSubGroup,selectedGroup]);

  return members;
};

export default useGetMembers;
