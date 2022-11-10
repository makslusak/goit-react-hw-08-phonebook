import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import css from './ContactsPage.module.css';

export const ContactsPage = () => {
  return (
    <>
      <main>
        <h1 className={css.title}>Phonebook</h1>
        <div className={css.wrapper}>
          <div>
            <h2>Add new contact</h2>
            <ContactForm />
            <Filter />
          </div>
          <div>
            <h2>Contacts</h2>
            <ContactList />
          </div>
        </div>
      </main>
    </>
  );
};
