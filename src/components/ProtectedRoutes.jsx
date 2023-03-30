import { Navigate } from 'react-router-dom';
import { useAuthContext } from '@/context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user } = useAuthContext();
  if (!user) {
    return <Navigate
    to="/login"
    state={{ pathname: location.pathname }}
    replace
  />
;
  }
  return children;
};
export default ProtectedRoute;
