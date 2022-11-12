import jwtDecode from "jwt-decode";
import { useContext, useEffect, useState } from "react";
import Auth from "../contexts/Auth";
import { User } from "../models/User";
import { getUser } from "../services/AuthApi";
import { getItem } from "../services/LocaleStorage";

const useGetLoggedUser = () => {
  const [user, setUser] = useState<User>({});
  const { isAuthenticated } = useContext(Auth);

  useEffect(() => {
    if (isAuthenticated == true) {
      const token = getItem("authToken");
      const decode: any = jwtDecode(token!);
      getUser(decode.id).then((response) => setUser(response));
    }
    console.log(user);
  },[isAuthenticated])

  return user;
};

export default useGetLoggedUser;
