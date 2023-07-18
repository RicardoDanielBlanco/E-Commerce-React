import {ReactNode, createContext, useEffect, useState} from 'react';

export const AuthContext = createContext<AuthContextProps>({})

interface AuthProviderProps {
    children: ReactNode;
  }

interface AuthContextProps {
    user: string | null; 
    setUser: (user: string | null ) => void; 
    role: string | null; 
    setRole: (role: string | null ) => void;
}

function AuthProvider({children}:AuthProviderProps){
    const [user, setUser] = useState(null)
    const [role, setRole] = useState(null)

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
          setUser(accessToken);
        }
      }, []);

    const value = {user, setUser, role, setRole}

    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;