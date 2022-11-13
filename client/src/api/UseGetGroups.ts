import { useContext, useEffect, useState } from "react";
import Auth from "../contexts/Auth";
import { Group } from "../models/Group";
import { getGroups } from "../services/AuthApi";

const useGetGroups = () => {
  const [groups, setGroups] = useState<Group[]>([]);
  const { isAuthenticated } = useContext(Auth);

  useEffect(() => {
    if (isAuthenticated == true) {
      getGroups().then((response) => setGroups(response));
    }
  },[isAuthenticated])

  return groups;
};

export default useGetGroups;
