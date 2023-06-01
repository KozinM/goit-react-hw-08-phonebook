import styles from './style.module.css';
import { ContactForm } from 'components/ContactForm/contactForm';
import Filter from '../ContactFilter/contactFilter';
import ContactList from '../ContactList/contactList';


export const Phonebook = () => {

    return (
    <div className={styles.wrapper}>
    <h1>Phonebook</h1>
    <ContactForm />
    <h2>Contacts</h2>
    <Filter />
    <ContactList />
  </div>
    )
}