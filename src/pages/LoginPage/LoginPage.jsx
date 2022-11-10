import { LoginForm } from 'components/LoginForm/LoginForm';

import css from './LoginPage.module.css';

export const LoginPage = () => {
  return (
    <div className={css.wrapper}>
      <h2>Please sign in to access the phonebook</h2>
      <LoginForm />
    </div>
  );
};
