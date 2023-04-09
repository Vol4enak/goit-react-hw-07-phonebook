import React, { useEffect } from 'react';
import { Container } from './App.styled';
import ContactForm from './ContantForm/contactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { useDispatch } from 'react-redux';
import * as ContactsOperation from '../redux/contactsOperation';
export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ContactsOperation.fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>

      <Filter />

      <ContactList />
    </Container>
  );
}
