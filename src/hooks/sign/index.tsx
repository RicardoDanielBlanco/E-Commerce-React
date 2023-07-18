import { useContext } from "react";
import AuthContext from "../../Context/AuthContext";
import axios from "axios";
import { useQuery } from "react-query";



export function Signin(user){
    const getUserProfile = async (_, user) => {
        const response = await axios.get('https://api.escuelajs.co/api/v1/auth/profile', {
          headers: {
            Authorization: `Bearer ${user.access_token}`
          }
        });
      
        return response.data;
      };

    const { data: userProfile, isLoading, isError, error } = useQuery(['userProfile', authContext.user], getUserProfile);

    if (isLoading) {
    return <div>Cargando perfil del usuario...</div>;
    }
    
    if (isError) {
    return <div>Error: {error.message}</div>;
    }
    
    console.log(userProfile);

    return null

}