/*eslint-disable*/
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAuthContext } from '@/context/AuthContext';
/* eslint-enable */

const ProtectedRoute = ({ children, location }) => {
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

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.shape({ pathname: PropTypes.string.isRequired }).isRequired,
};

export default ProtectedRoute;
