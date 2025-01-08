import { createContext,useState } from "react";

export const SideBarContext = createContext();

export const SideBarContextProvider = ({children}) =>{
    const [openSideBar,setOpenSideBar] = useState(false)
    return (
        <SideBarContext.Provider value={{openSideBar,setOpenSideBar}}>
            {children}
        </SideBarContext.Provider>
    )
}