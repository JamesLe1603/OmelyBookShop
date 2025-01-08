import { Route, Routes } from 'react-router';
import Register from '../pages/Register/register';
import ForgotPassword from '../pages/ForgotPassword/forgotPassword';
import UserLayout from '../user/layouts/UserLayout';
import Login from '../pages/Login/login';
import { UserProvider } from '../shared/components/UserContext';
import Home from '../pages/Home/Home';
const PublicRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<UserLayout />}>
                <Route index element={<Home />} />
            </Route>
        </Routes>
    )
}
export default PublicRouter;