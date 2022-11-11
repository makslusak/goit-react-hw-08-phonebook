import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsAuthenticated } from 'redux/auth/auth-selectors';
import css from './Navigation.module.css';
import { SlNotebook } from 'react-icons/sl';

export const Navigation = () => {
  const isLogedIn = useSelector(selectIsAuthenticated);

  return (
    <>
      <nav className={css.nav}>
        <NavLink to="/">
          <SlNotebook className={css.icon} />
          Home
        </NavLink>
        {isLogedIn && <NavLink to="/contacts">Contacts</NavLink>}
        {!isLogedIn && <NavLink to="/registration">Registration</NavLink>}
        {!isLogedIn && <NavLink to="/login">Login</NavLink>}
      </nav>
    </>
  );
};
