import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registrationOperation } from 'redux/auth/auth-operations';
import css from './RegistrationForm.module.css';

export const RegistrationForm = () => {
  const [signUpName, setSignUpName] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [signUpPasswordRepeat, setSignUpPasswordRepeat] = useState('');

  const dispatch = useDispatch();

  const inputs = {
    signUpName: setSignUpName,
    signUpEmail: setSignUpEmail,
    signUpPassword: setSignUpPassword,
    signUpPasswordRepeat: setSignUpPasswordRepeat,
  };

  const handleSignUpInput = evt => {
    inputs[evt.target.name](evt.target.value);
  };

  const handleSignUpSubmit = evt => {
    evt.preventDefault();
    const userData = {
      name: signUpName,
      email: signUpEmail,
      password: signUpPassword,
    };

    if (signUpPassword === signUpPasswordRepeat) {
      setSignUpName('');
      setSignUpEmail('');
      setSignUpPassword('');
      setSignUpPasswordRepeat('');
      dispatch(registrationOperation(userData));
    } else {
      alert('Passwords do not match ');
    }
  };

  return (
    <form className={css.form} onSubmit={handleSignUpSubmit}>
      <label>
        Enter your name
        <input
          onChange={handleSignUpInput}
          className={css.input}
          type="name"
          value={signUpName}
          name="signUpName"
        />
      </label>

      <label>
        Enter your email
        <input
          onChange={handleSignUpInput}
          className={css.input}
          type="email"
          value={signUpEmail}
          name="signUpEmail"
        />
      </label>

      <label>
        Enter password
        <input
          onChange={handleSignUpInput}
          className={css.input}
          type="password"
          value={signUpPassword}
          name="signUpPassword"
        />
      </label>

      <label>
        Repeat password
        <input
          onChange={handleSignUpInput}
          className={css.input}
          type="password"
          value={signUpPasswordRepeat}
          name="signUpPasswordRepeat"
        />
      </label>

      <button className={css.button} type="submit">
        Sign up
      </button>
    </form>
  );
};
