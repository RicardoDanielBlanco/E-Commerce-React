import { Navigate } from "react-router-dom";
import { AuthContext } from '../../Context/AuthContext';
import { useContext } from "react";

function RequireNotAuth({ children }: {children: JSX.Element;}){
    const authContext = useContext(AuthContext);

    if (authContext.user){
        return <Navigate to='/' replace />
    }

    return children;

}

export default RequireNotAuth;