import { RegistrationForm } from 'components/RegistrationForm/RegistrationForm';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectIsAuthenticated } from 'redux/auth/auth-selectors';

import css from './RegistrationPage.module.css';

export const RegistrationPage = () => {
  // const navigate = useNavigate();
  // const isLogedIn = useSelector(selectIsAuthenticated);

  // useEffect(() => {
  //   isLogedIn && navigate('/contacts');
  // }, []);

  return (
    <div className={css.wrapper}>
      <h2>Please register to access the phonebook</h2>
      <RegistrationForm />
    </div>
  );
};
