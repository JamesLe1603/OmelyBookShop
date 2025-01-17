import { createContext, useState } from "react";

export const CategoryContext = createContext();
export const CategoryProvider = ({children}) => {
    const [editCategory,setEditCategory] = useState(false);
    return (
        <CategoryContext.Provider value={{editCategory,setEditCategory}}>
            {children}
        </CategoryContext.Provider>
    )
}