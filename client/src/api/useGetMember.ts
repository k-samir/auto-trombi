import { useContext, useEffect, useState } from 'react';
import Auth from '../contexts/Auth';
import { Member } from "../models/Member";
import { getMember } from '../services/AuthApi';

const useGetMember = (userId:string) => {
    const [member, setMember] = useState<Member>();
    const { isAuthenticated } = useContext(Auth);
  
    useEffect(() => {
      if (isAuthenticated == true) {
        getMember(userId).then((response:Member) => setMember(response));
      }
    },[isAuthenticated])
  
    return member;
  };
  
  export default useGetMember;
  
  