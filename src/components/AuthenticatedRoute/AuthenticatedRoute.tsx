import { useContext } from "react";
import { Navigate } from "react-router-dom";
import Auth from "../../contexts/Auth";

type Props = {
    component:JSX.Element
}

const AuthenticatedRoute = (props:Props) => {
    const {component} = props;
    
    const { isAuthenticated } = useContext(Auth);

    return isAuthenticated ? component : <Navigate to="/login" />

}

export default AuthenticatedRoute;