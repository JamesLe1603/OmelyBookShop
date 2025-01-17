import { BrowserRouter, Route, Routes } from "react-router";
import Products from "../admin/components/products";
import AdminLayout from "../admin/layout/AdminLayout";

import Storage from "../pages/Storage/storage";
import { BookModalProvider } from "../pages/Storage/component/ModalContext";
import BookInfomation from "../pages/Book/BookInfo";
import Category from "../pages/Category/category";
import GenreManagement from "../pages/Genre/Genre";
import { CategoryProvider } from "../pages/Storage/component/CategoryContext";
import ExampleForm from "../pages/Book/example";
const PrivateRouter = () => {
    return (

            <BookModalProvider>
                <Routes>
                    <Route path="/admin" element={<AdminLayout />}>
                        <Route index element={<Products />} />
                        <Route path="storage" element={<Storage />}/>
                        <Route path="category" element=
                            {
                                <CategoryProvider>
                                    <Category />
                                </CategoryProvider>
                            } />
                        <Route path="add-book" element={<BookInfomation />}/>
                        <Route path="genre" element={<GenreManagement/>}/>
                    </Route>
                </Routes>
            </BookModalProvider>

    )
}
export default PrivateRouter;