import { Navigate } from "react-router-dom";
import { AuthContext } from '../../Context/AuthContext';
import { useContext } from "react";

function RequireRole({ children }: {children: JSX.Element;}){
    const authContext = useContext(AuthContext);

    if (authContext.role ==="admin"){
        return children;
    }
    
    return <Navigate to='/' replace />

}

export default RequireRole;