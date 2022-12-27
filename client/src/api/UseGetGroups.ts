import { useContext, useEffect, useState } from "react";
import Auth from "../contexts/Auth";
import { Group } from "../models/Group";
import { getGroups } from "../services/AuthApi";
import { SubGroup } from "./../models/SubGroup";

const useGetGroups = (
  setSelectedGroup: (group: Group) => void,
  setSelectedSubGroup: (subGroup: SubGroup) => void
) => {
  const [groups, setGroups] = useState<Group[]>([]);
  const { isAuthenticated } = useContext(Auth);

  const [shouldRefetch, refetch] = useState({});
  
  useEffect(() => {
    if (isAuthenticated == true) {
      getGroups().then((response) => setGroups(response));
    }
  }, [isAuthenticated, shouldRefetch]);

  return [groups, refetch] as const;
};

export default useGetGroups;
