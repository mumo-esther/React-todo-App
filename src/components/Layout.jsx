/*eslint-disable*/
import { Outlet } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { AuthProvider } from '@/context/AuthContext';
/* eslint-enable */

const Layout = () => (
  <div className="wrapper">
    <AuthProvider>
      <Navbar />
      <Outlet />
    </AuthProvider>
  </div>
);
export default Layout;
