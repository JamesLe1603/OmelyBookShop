import { createContext, useContext, useEffect } from 'react';
import PublicRouter from './routes/PublicRouter';
import { UserContext } from './context/UserContext';
import PrivateRouter from './routes/PrivateRouter';
import { BrowserRouter, Route, Routes } from 'react-router';
import Login from './shared/login';
import Register from './shared/register';
import ForgotPassword from './shared/forgotPassword';
import { UserProvider } from './context/UserContext';
function App() {
  const { user } = useContext(UserContext)
  console.log("tai khoan hien tai 1: ", user)
  useEffect(() => {
    console.log("tai khoan hien tai 2: ", user)
  }, [user])
  return (
    <>
      <>
        <UserProvider>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/forgot-password' element={<ForgotPassword />} />
          </Routes>
        </UserProvider>
        <PublicRouter />
        <PrivateRouter />
      </>
    </>
  );
}
export default App;