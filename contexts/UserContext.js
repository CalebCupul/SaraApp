import { createContext, useState } from "react";

export const UserContext = createContext({
    token: '',
    userInfo: {},
    isAuthenticated: false,
    authenticate: (data) => {},
    logout: () => {},
})

function UserContextProvider({children}){
    const [authToken, setAuthToken] = useState();
    const [userInfo, setUserInfo] = useState({})

    function authenticate(data){
        const { token, ...userData } = data;
        setAuthToken(token)
        setUserInfo(userData)
    }

    function logout(){
        setAuthToken(null)
        setUserInfo({})
    }

    const value = {
        token: authToken,
        userInfo: userInfo,
        isAuthenticated: !!authToken,
        authenticate: authenticate,
        logout: logout
    }
    
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export default UserContextProvider

// userData Structure
// "data": {
//     "id": 1,
//     "name": "test",
//     "email": "test@gmail.com",
//     "role_id": 0,
//     "qrCodePath": "url",
//     "token": "token"
// }