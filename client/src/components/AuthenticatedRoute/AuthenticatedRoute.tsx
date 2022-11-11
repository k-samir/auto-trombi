import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Auth from "../../contexts/Auth";



const AuthenticatedRoute = () => {
    
    const { isAuthenticated } = useContext(Auth);

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
}

export default AuthenticatedRoute;