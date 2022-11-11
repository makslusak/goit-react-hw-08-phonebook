import { LoginForm } from 'components/LoginForm/LoginForm';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectIsAuthenticated } from 'redux/auth/auth-selectors';

import css from './LoginPage.module.css';

export const LoginPage = () => {
  // const navigate = useNavigate();
  // const isLogedIn = useSelector(selectIsAuthenticated);

  // useEffect(() => {
  //   isLogedIn && navigate('/contacts');
  // }, []);

  return (
    <div className={css.wrapper}>
      <h2>Please sign in to access the phonebook</h2>
      <LoginForm />
    </div>
  );
};
