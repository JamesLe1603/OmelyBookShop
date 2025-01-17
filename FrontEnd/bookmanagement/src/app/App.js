import { createContext, useContext, useEffect } from 'react';
import PublicRouter from './routes/PublicRouter';
import { UserContext } from './shared/components/UserContext';
import PrivateRouter from './routes/PrivateRouter';
import { BrowserRouter, Route, Routes } from 'react-router';
import Login from './pages/Login/login';
import Register from './pages/Register/register';
import ForgotPassword from './pages/ForgotPassword/forgotPassword';
import { UserProvider } from './shared/components/UserContext';
import { SideBarContextProvider } from './shared/components/SideBarContext';
import { BookDataProvider } from './shared/components/BookContext';
import ScrollToTop from './shared/components/ScrollToTop';
function App() {
  // const { user } = useContext(UserContext)
  // console.log("tai khoan hien tai 1: ", user)
  // // useEffect(() => {
  // //   console.log("tai khoan hien tai 2: ", user)
  // // }, [user])
  return (
    <>
      <>
        <SideBarContextProvider>
          <BookDataProvider>
            <PublicRouter />  
            <PrivateRouter />
          </BookDataProvider>
        </SideBarContextProvider>
        <ScrollToTop/>
      </>
    </>
  );
}
export default App;