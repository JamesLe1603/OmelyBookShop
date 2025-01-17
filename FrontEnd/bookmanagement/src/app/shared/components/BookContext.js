import { createContext, useState } from "react";

export const BookContext = createContext();

export const BookDataProvider = ({children}) => {
    const [bookList,setBookList] = useState([]);
    const [book,setBook] = useState({});
    return (
        <>
            <BookContext.Provider value={{bookList,setBookList,book,setBook}}>
                {children}
            </BookContext.Provider>
        </>
    )
}