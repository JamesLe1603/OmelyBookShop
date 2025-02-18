import { createContext, useState } from "react";
export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [userAvatar,setUserAvatar] = useState();
    return (
        <UserContext.Provider value={{user,setUser,userAvatar,setUserAvatar}}>
            {children}
        </UserContext.Provider>
    )
}