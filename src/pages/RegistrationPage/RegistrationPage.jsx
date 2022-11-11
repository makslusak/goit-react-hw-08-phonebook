import { RegistrationForm } from 'components/RegistrationForm/RegistrationForm';

import css from './RegistrationPage.module.css';

const RegistrationPage = () => {
  return (
    <div className={css.wrapper}>
      <h2>Please register to access the phonebook</h2>
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;
