import { BrowserRouter, Route, Routes } from "react-router";
import Products from "../admin/products";
import AdminLayout from "../layout/AdminLayout";
const PrivateRouter = () => {
    return (
            <Routes>
                <Route path="/admin" element={<AdminLayout />}>
                    <Route index element={<Products/>}/>
                </Route>
            </Routes>
    )
}
export default PrivateRouter;