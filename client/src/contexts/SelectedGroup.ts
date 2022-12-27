import React from "react";
import { Group } from "../models/Group";

export default React.createContext({
    selectedGroup: {} as Group,
    setSelectedGroup: (value: Group) => {}
});