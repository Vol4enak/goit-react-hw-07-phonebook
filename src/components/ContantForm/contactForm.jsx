import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { addContact } from 'redux/contactsOperation';
import { useDispatch, useSelector } from 'react-redux';
export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const state = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();
  const handelChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);

        break;
      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const formSubmit = e => {
    e.preventDefault();

    const res = state.find(
      index => index.name.toLowerCase() === name.toLowerCase()
    );
    if (res) {
      alert(`${name} is already in contacts`);
      return;
    }

    dispatch(addContact({ id: nanoid, name, number }));
    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={formSubmit}>
      <label>
        Name
        <br />
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={handelChange}
          value={name}
          required
        />
      </label>
      <br />
      <label>
        phone
        <br />
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={handelChange}
          value={number}
          required
        />
      </label>
      <br />
      <button type="submit">Add contact</button>
    </form>
  );
}
