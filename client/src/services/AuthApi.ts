import axios, { AxiosRequestConfig } from "axios";
import jwtDecode from "jwt-decode";
import { Credentials } from "../models/Credentials";
import { User } from "../models/User";
import { addItem, getItem, removeItem } from "./LocaleStorage";

const API_URL = import.meta.env.VITE_API_URL;

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
    .post(`${API_URL}/login`, credentials)
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
    .post(`${API_URL}/signup`, user)
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
    params: { id: id },
  };

  const res = await axios.get(`${API_URL}/getUser`, config);
  return res.data.user;
};

export const getGroups = async () => {
  const token = getItem("authToken");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const res = await axios.get(`${API_URL}/getGroups`, config);
  return res.data.groups;
};

export const getMember = async (id: string) => {
  const token = getItem("authToken");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
    params: { id: id },
  };

  const res = await axios.get(`${API_URL}/getMember`, config);
  return res.data.member;
};

export const getMembers = async (membersId: string[]) => {
  const token = getItem("authToken");
  const config: AxiosRequestConfig = {
    headers: { Authorization: `Bearer ${token}` },
    params: { membersId: membersId.join(",") },
  };

  const res = await axios.get(`${API_URL}/getMembers`, config);
  return res.data.members;
};

export const getRemainingMembers = async (
  groupId: string,
  subGroupId: string
) => {
  const token = getItem("authToken");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
    params: { groupId: groupId, subGroupId: subGroupId },
  };

  const res = await axios.get(`${API_URL}/getRemainingMembers`, config);
  return res.data.remainingMembers;
};

export const addExistingMemberToSubGroup = async (
  memberId: string,
  groupId: string,
  subGroupId: string
) => {
  const token = getItem("authToken");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  return axios
    .post(
      `${API_URL}/addExistingMemberToSubGroup`,
      { memberId, groupId, subGroupId },
      config
    )
    .then((response) => response.data.token)
    .catch(function (error) {
      if (!error.response) {
        return "Error: Network Error";
      } else {
        return error.response.data.message;
      }
    });
};

export const addNewMemberToSubGroup = async (
  firstname: string,
  lastname: string,
  company: string,
  picture: string,
  companyLogo: string,
  groupId: string,
  subGroupId: string
) => {
  const token = getItem("authToken");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return axios
    .post(
      `${API_URL}/addNewMemberToSubGroup`,
      {
        firstname,
        lastname,
        company,
        picture,
        companyLogo,
        groupId,
        subGroupId,
      },
      config
    )
    .then((response) => response.data.token)
    .catch(function (error) {
      if (!error.response) {
        return "Error: Network Error";
      } else {
        return error.response.data.message;
      }
    });
};

export const removeMemberFromSubGroup = async (
  memberId: string,
  groupId: string,
  subGroupId: string
) => {
  const token = getItem("authToken");

  return axios
    .delete(`${API_URL}/removeMemberFromSubGroup`, {
      headers: { Authorization: `Bearer ${token}` },
      data: { memberId, groupId, subGroupId },
    })
    .then((response) => response.data.token)
    .catch(function (error) {
      if (!error.response) {
        return "Error: Network Error";
      } else {
        return error.response.data.message;
      }
    });
};

export const addSubGroup = async (subgroupName: string, groupId: string) => {
  const token = getItem("authToken");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return axios
    .post(`${API_URL}/addSubGroup`, { subgroupName, groupId }, config)
    .then((response) => response.data.token)
    .catch(function (error) {
      if (!error.response) {
        return "Error: Network Error";
      } else {
        return error.response.data.message;
      }
    });
};

export const addGroup = async (groupName: string) => {
  const token = getItem("authToken");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return axios
    .post(`${API_URL}/addGroup`, { groupName }, config)
    .then((response) => response.data.token)
    .catch(function (error) {
      if (!error.response) {
        return "Error: Network Error";
      } else {
        return error.response.data.message;
      }
    });
};

export const removeGroup = async (groupId: string) => {
  const token = getItem("authToken");

  return axios
    .delete(`${API_URL}/removeGroup`, {
      headers: { Authorization: `Bearer ${token}` },
      data: { groupId },
    })
    .then((response) => response.data.token)
    .catch(function (error) {
      if (!error.response) {
        return "Error: Network Error";
      } else {
        return error.response.data.message;
      }
    });
};

export const removeSubGroup = async (groupId: string, subGroupId: string) => {
  const token = getItem("authToken");

  return axios
    .delete(`${API_URL}/removeSubGroup`, {
      headers: { Authorization: `Bearer ${token}` },
      data: { groupId, subGroupId },
    })
    .then((response) => response.data.token)
    .catch(function (error) {
      if (!error.response) {
        return "Error: Network Error";
      } else {
        return error.response.data.message;
      }
    });
};
