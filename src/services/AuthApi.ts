import { data } from "../data/data";
import { User } from "../models/User";
import { addItem, getItem, removeItem } from "./LocaleStorage";

const expirationMinutes = 20;

export const hasAuthenticated = () => {
  const token = getItem("authToken");
  const validityToken = token ? tokenIsValid(token) : false;
  
  if (validityToken === false) {
    removeItem("authToken");
  }

  return validityToken;
};

export const login = async (credentials: User) => {
  const res = data.users.find((user: User) =>(user.username == credentials.username && user.password == credentials.password));
  if (res) {
    const token = credentials.username + "." + (new Date().getTime() + 60000* expirationMinutes ) 
    addItem("authToken", token);
    return true;
  }
  return false;
};

export const getUser = (credentials : User) => {
  return data.users.find((user: User) =>(user.username == credentials.username && user.password == credentials.password));
}

export const logout = () => {
  removeItem("authToken");
};

export const tokenIsValid = (token: string) => {
    const expiration:number = Number(token.split('.')[1]);
    
    if (expiration * 1000 > new Date().getTime()) {
        return true;
    }


  return false;
};
