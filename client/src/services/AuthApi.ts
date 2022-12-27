import axios, { AxiosRequestConfig } from "axios";
import jwtDecode from "jwt-decode";
import { Credentials } from "../models/Credentials";
import { User } from "../models/User";
import { addItem, getItem, removeItem } from "./LocaleStorage";

export const hasAuthenticated = () => {
  const token = getItem("authToken");
  const validityToken = token ? tokenIsValid(token) : false;

  if (validityToken === false) {
    removeItem("authToken");
  }
  return validityToken;
};

export const login = async (credentials: Credentials) => {
  return axios
    .post("http://localhost:3000/login", credentials)
    .then((response) => response.data.token)
    .then((token) => {
      addItem("authToken", token);
      return true;
    })
    .catch(function (error) {
      if (!error.response) {
        return "Error: Network Error";
      } else {
        return error.response.data.message;
      }
    });
};

export const signup = async (user: User) => {
  return axios
    .post("http://localhost:3000/signup", user)
    .then((response) => response.data.token)
    .then((token) => {
      addItem("authToken", token);
      return true;
    })
    .catch(function (error) {
      if (!error.response) {
        return "Error: Network Error";
      } else {
        return error.response.data.message;
      }
    });
};

export const logout = () => {
  removeItem("authToken");
};

export const tokenIsValid = (token: any) => {
  const { exp }: any = jwtDecode(token);
  if (exp * 1000 > new Date().getTime()) {
    return true;
  }
  return false;
};

export const getUser = async (id: string) => {
  const token = getItem("authToken");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
    params: { id: id}
  };

  const res = await axios.get("http://localhost:3000/getUser",config);
  return res.data.user;
};

export const getGroups = async () => {
  const token = getItem("authToken");
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  
  const res = await axios.get("http://localhost:3000/getGroups",config);
  return res.data.groups;
};

export const getMember = async (id: string) => {
  const token = getItem("authToken");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
    params: { id: id}
  };

  const res = await axios.get("http://localhost:3000/getMember",config);
  return res.data.member;
};

export const getMembers = async (membersId:string[]) => {
  

  const token = getItem("authToken");
  const config:AxiosRequestConfig = {
    headers: { Authorization: `Bearer ${token}` },
    params: { membersId: membersId.join(',')}
    };
 
  const res = await axios.get("http://localhost:3000/getMembers",config);
  return res.data.members;
}

export const getRemainingMembers = async (groupId:string,subGroupId:string) => {
  const token = getItem("authToken");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
    params: { groupId: groupId, subGroupId:subGroupId}
  };
  
  const res = await axios.get("http://localhost:3000/getRemainingMembers",config);
  return res.data.remainingMembers;
};

export const addExistingMemberToSubGroup = async (memberId:string,groupId:string,subGroupId:string) => {
  
  return axios
    .post("http://localhost:3000/addExistingMemberToSubGroup", {memberId,groupId,subGroupId})
    .then((response) => response.data.token)
    .catch(function (error) {
      if (!error.response) {
        return "Error: Network Error";
      } else {
        return error.response.data.message;
      }
    });
};

export const addNewMemberToSubGroup = async (firstname:string,lastname:string,company:string,picture:string,companyLogo:string,groupId:string,subGroupId:string) => {
  return axios
    .post("http://localhost:3000/addNewMemberToSubGroup", {firstname,lastname,company,picture,companyLogo,groupId,subGroupId})
    .then((response) => response.data.token)
    .catch(function (error) {
      if (!error.response) {
        return "Error: Network Error";
      } else {
        return error.response.data.message;
      }
    });
}

export const removeMemberFromSubGroup = async (memberId:string,groupId:string,subGroupId:string) => {
  return axios
    .delete("http://localhost:3000/removeMemberFromSubGroup", {data : {memberId,groupId,subGroupId}})
    .then((response) => response.data.token)
    .catch(function (error) {
      if (!error.response) {
        return "Error: Network Error";
      } else {
        return error.response.data.message;
      }
    });
}

export const addSubGroup = async (subgroupName:string,groupId:string) => {
  return axios
    .post("http://localhost:3000/addSubGroup", {subgroupName,groupId})
    .then((response) => response.data.token)
    .catch(function (error) {
      if (!error.response) {
        return "Error: Network Error";
      } else {
        return error.response.data.message;
      }
    });
}

export const addGroup = async (groupName:string) => {
  return axios
    .post("http://localhost:3000/addGroup", {groupName})
    .then((response) => response.data.token)
    .catch(function (error) {
      if (!error.response) {
        return "Error: Network Error";
      } else {
        return error.response.data.message;
      }
    });
}

export const removeGroup = async (groupId:string) => {
  return axios
    .delete("http://localhost:3000/removeGroup", {data : {groupId}})
    .then((response) => response.data.token)
    .catch(function (error) {
      if (!error.response) {
        return "Error: Network Error";
      } else {
        return error.response.data.message;
      }
    });
}


export const removeSubGroup = async (groupId:string,subGroupId:string) => {
  return axios
    .delete("http://localhost:3000/removeSubGroup", {data : {groupId,subGroupId}})
    .then((response) => response.data.token)
    .catch(function (error) {
      if (!error.response) {
        return "Error: Network Error";
      } else {
        return error.response.data.message;
      }
    });
}





