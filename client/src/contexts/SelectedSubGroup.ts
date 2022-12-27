import React from "react";
import { SubGroup } from './../models/SubGroup';

export default React.createContext({
    selectedSubGroup: {} as SubGroup,
    setSelectedSubGroup: (value: SubGroup) => {}
});