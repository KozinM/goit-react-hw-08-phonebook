import { Route, Routes } from 'react-router-dom';

//components
import { Layout } from './Layout/Layout';
import { ContactForm } from './ContactForm/contactForm';
import { SigninForm } from './SigninForm/SinginForm';
import { LoginForm } from './LoginForm/LoginForm';
import ContactList from './ContactList/contactList';
import Filter from './ContactFilter/contactFilter';
import styles from './style.module.css';




export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route
        index element={
          <div className={styles.wrapper}>
            <h1>Phonebook</h1>
            <ContactForm />
            <h2>Contacts</h2>
            <Filter />
            <ContactList />
          </div>
        }
      />
      <Route path="login" element={<LoginForm/>} />
      <Route path="signin" element={<SigninForm/>} />
      <Route path="*" element={<div>Page not found!!</div>} />  
      </Route>
    </Routes>
  );
};
