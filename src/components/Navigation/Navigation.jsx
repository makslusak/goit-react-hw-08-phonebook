import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsAuthenticated, selectToken } from 'redux/auth/auth-selectors';
import css from './Navigation.module.css';

export const Navigation = () => {
  const isLogedIn = useSelector(selectIsAuthenticated);

  return (
    <nav className={css.nav}>
      {isLogedIn && <NavLink to="/contacts">Contacts</NavLink>}
      {!isLogedIn && <NavLink to="/registration">Registration</NavLink>}
      {!isLogedIn && <NavLink to="/login">Login</NavLink>}
    </nav>
  );
};
