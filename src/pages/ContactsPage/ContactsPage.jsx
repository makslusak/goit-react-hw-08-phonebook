import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectIsAuthenticated } from 'redux/auth/auth-selectors';
import css from './ContactsPage.module.css';

export const ContactsPage = () => {
  // const navigate = useNavigate();
  // const isLogedIn = useSelector(selectIsAuthenticated);

  // useEffect(() => {
  //   !isLogedIn && navigate('/login');
  // }, []);

  return (
    <>
      <main className={css.main}>
        <h1 className={css.title}>Phonebook</h1>
        <div className={css.wrapper}>
          <div>
            <h2 className={css.subtitle}>Add new contact</h2>
            <ContactForm />
            <Filter />
          </div>
          <div>
            <h2 className={css.subtitle}>Contacts</h2>
            <ContactList />
          </div>
        </div>
      </main>
    </>
  );
};
