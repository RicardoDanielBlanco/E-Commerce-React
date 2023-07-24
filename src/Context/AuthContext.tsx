import {ReactNode, createContext, useState} from 'react';

export const AuthContext = createContext<AuthContextProps>({
  user: null,
  setUser: () => {},
  role: null,
  setRole: () => {},})

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
    const [user, setUser] = useState<string | null>(localStorage.getItem('accessToken'))
    const [role, setRole] = useState<string | null>(localStorage.getItem('roleProfile'))

    const value = {user, setUser, role, setRole}

    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;