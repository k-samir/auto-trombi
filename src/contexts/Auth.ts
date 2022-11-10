import React from "react";
import { User } from "../models/User";

export default React.createContext({
    isAuthenticated: false,
    setIsAuthenticated: (value: boolean) => {},
    connectedUser:{},
    setConnectedUser: (value: User) => {},

});