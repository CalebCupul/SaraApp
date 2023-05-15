import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useState } from "react";

export const UserContext = createContext({
    token: '',
    userInfo: {},
    isAuthenticated: false,
    authenticate: (data) => {},
    logout: () => {},
    storageAuthentication: (token, user) => {}
})

function UserContextProvider({children}){
    const [authToken, setAuthToken] = useState();
    const [userInfo, setUserInfo] = useState({})

    function authenticate(data){
        const { token, ...userData } = data;
        setAuthToken(token)
        setUserInfo(userData)
        AsyncStorage.setItem('token', token)
        AsyncStorage.setItem('userId', data.id.toString())
    }

    function storageAuthentication(token, user){
        user.token = token
        console.log(user)
        setUserInfo(user)
        setAuthToken(token)
    }

    function logout(){
        setAuthToken(null)
        setUserInfo({})
        AsyncStorage.removeItem('token')
        AsyncStorage.removeItem('userId')
    }

    const value = {
        token: authToken,
        userInfo: userInfo,
        isAuthenticated: !!authToken,
        authenticate: authenticate,
        logout: logout,
        storageAuthentication, storageAuthentication
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