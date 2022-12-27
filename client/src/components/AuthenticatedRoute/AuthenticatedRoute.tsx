import { useContext, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Auth from "../../contexts/Auth";



const AuthenticatedRoute = () => {
    
    const { isAuthenticated } = useContext(Auth);
    useEffect(()=> {
    },[])
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
}

export default AuthenticatedRoute;