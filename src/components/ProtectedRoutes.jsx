/*eslint-disable*/
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '@/context/AuthContext';
/* eslint-enable */

const ProtectedRoute = ({ children }) => {
  const { user } = useAuthContext();
  if (!user) {
    return (
      <Navigate
        to="/login"
        state={{ pathname: location.pathname }}
        replace
      />
    );
  }
  return children;
};
export default ProtectedRoute;
