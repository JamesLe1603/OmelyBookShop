import { Route, Routes } from 'react-router';
import Register from '../shared/register';
import ForgotPassword from '../shared/forgotPassword';
import UserLayout from '../layout/UserLayout';
import Login from '../shared/login';
import { UserProvider } from '../context/UserContext';
import Home from '../user/home';
const PublicRouter = () => {
    return (
            <Routes>
                <Route path='/' element={<UserLayout />}>
                    <Route index element={<Home/>}/>
                </Route>
            </Routes>
    )
}
export default PublicRouter;