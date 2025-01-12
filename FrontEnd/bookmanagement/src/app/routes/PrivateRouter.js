import { BrowserRouter, Route, Routes } from "react-router";
import Products from "../admin/components/products";
import AdminLayout from "../admin/layout/AdminLayout";
import { BookDataProvider } from "../shared/components/BookContext";
import Storage from "../pages/Storage/storage";
import { BookModalProvider } from "../pages/Storage/component/ModalContext";
import BookInfomation from "../pages/Book/BookInfo";
import Category from "../pages/Category/category";
const PrivateRouter = () => {
    return (
        <BookDataProvider>
            <BookModalProvider>
                <Routes>
                    <Route path="/admin" element={<AdminLayout />}>
                        <Route index element={<Products />} />
                            <Route path="storage" element={<Storage />}/>
                            <Route path="category" element={<Category/>}/>
                        <Route path="add-book" element={<BookInfomation />}></Route>
                    </Route>
                </Routes>
            </BookModalProvider>
        </BookDataProvider>
    )
}
export default PrivateRouter;