import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from '../../Context/AuthContext';
import { useContext } from "react";

function RequireAuth({ children }: {children: JSX.Element;}){
    const authContext = useContext(AuthContext);
    const location = useLocation();

    console.log(authContext)

    if (!authContext.user){
        return <Navigate to='/login' state={{from: location}} replace />
    }

    return children;

}

export default RequireAuth;