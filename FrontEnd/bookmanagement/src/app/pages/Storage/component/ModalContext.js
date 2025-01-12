import { createContext, useState } from "react";

export const ModalContext = createContext();

export const BookModalProvider = ({children}) => {
    const [show,setShow] = useState(false)
    return (
        <ModalContext.Provider value={{show,setShow}}>
            {children}
        </ModalContext.Provider>
    )
}