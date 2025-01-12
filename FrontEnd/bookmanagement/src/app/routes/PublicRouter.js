import { Route, Routes } from 'react-router';
import Register from '../pages/Register/register';
import ForgotPassword from '../pages/ForgotPassword/forgotPassword';
import UserLayout from '../user/layouts/UserLayout';
import Login from '../pages/Login/login';
import { UserProvider } from '../shared/components/UserContext';
import Home from '../pages/Home/home';
import About from '../pages/About/about';
import Contact from '../pages/Contact/contact';
import Profile from '../pages/Profile/profile';
import Products from '../pages/Product/product';
import Cart from '../pages/Cart/cart';
const PublicRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<UserLayout />}>
                <Route index element={<Home/>}/>
                <Route path='product' element={<Products/>}/>
                <Route path='contact' element={<Contact/>}/>
                <Route path='cart' element={<Cart/>}/>
                <Route path='profile' element={<Profile/>}/>
                <Route path='about' element={<About/>}/>
            </Route>
        </Routes>
    )
}
export default PublicRouter;