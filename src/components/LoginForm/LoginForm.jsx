import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginOperation } from 'redux/auth/auth-operations';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');

  const dispatch = useDispatch();

  const inputs = {
    signInEmail: setSignInEmail,
    signInPassword: setSignInPassword,
  };

  const handleSignInInput = evt => {
    inputs[evt.target.name](evt.target.value);
  };

  const handleSignInSubmit = evt => {
    evt.preventDefault();

    const userData = {
      email: signInEmail,
      password: signInPassword,
    };

    setSignInEmail('');
    setSignInPassword('');

    dispatch(loginOperation(userData));
  };

  return (
    <form className={css.form} onSubmit={handleSignInSubmit}>
      <label>
        Enter your email
        <input
          onChange={handleSignInInput}
          className={css.input}
          type="email"
          value={signInEmail}
          name="signInEmail"
        />
      </label>
      <label>
        Enter password
        <input
          onChange={handleSignInInput}
          className={css.input}
          type="password"
          value={signInPassword}
          name="signInPassword"
        />
      </label>

      <button className={css.button} type="submit">
        Sign in
      </button>
    </form>
  );
};
