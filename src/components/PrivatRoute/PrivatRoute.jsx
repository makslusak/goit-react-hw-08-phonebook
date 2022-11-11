import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectIsAuthenticated } from 'redux/auth/auth-selectors';

const PrivatRoute = () => {
  const isLogin = useSelector(selectIsAuthenticated);
  return isLogin ? <Outlet /> : <Navigate to="/login" />;
};
export default PrivatRoute;
