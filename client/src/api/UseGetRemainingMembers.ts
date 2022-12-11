import { useContext, useEffect, useState } from "react";
import Auth from "../contexts/Auth";
import { Member } from "../models/Member";
import { getRemainingMembers } from "../services/AuthApi";

const useGetRemainingMembers = (groupId:string,subGroupId:string) => {
  const [members, setMembers] = useState<Member[]>([]);
  const { isAuthenticated } = useContext(Auth);

  const propComparator = (propName:any) =>
  (a:any, b:any) => a[propName] == b[propName] ? 0 : a[propName] < b[propName] ? -1 : 1


  useEffect(() => {
    if (isAuthenticated == true) {
        getRemainingMembers(groupId,subGroupId).then((response) => setMembers(response.sort(propComparator('firstname'))));
    }
  },[isAuthenticated])

  return members;
};

export default useGetRemainingMembers;
