import axios from "axios";
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
