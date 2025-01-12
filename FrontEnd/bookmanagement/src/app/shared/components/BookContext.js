import { createContext, useState } from "react";

export const BookContext = createContext();

export const BookDataProvider = ({children}) => {
    const [bookList,setBookList] = useState([]);
    return (
        <>
            <BookContext.Provider value={{bookList,setBookList}}>
                {children}
            </BookContext.Provider>
        </>
    )
}