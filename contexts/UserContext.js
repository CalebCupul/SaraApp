import { createContext, useState } from "react";

export const UserContext = createContext({
    token: '',
    isAuthenticated: false,
    authenticate: (token) => {},
    logout: () => {},
})

function UserContextProvider({children}){
    const [authToken, setAuthToken] = useState();

    function authenticate(token){
        setAuthToken(token)
    }

    function logout(){
        setAuthToken(null)
    }

    const value = {
        token: authToken,
        isAuthenticated: !!authToken,
        authenticate: authenticate,
        logout: logout
    }
    
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export default UserContextProvider