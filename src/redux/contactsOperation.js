import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const response = await axios.get(
    'https://6432b5093e05ff8b372bf1e9.mockapi.io/contacst'
  );

  return response.data;
});
export const addContact = createAsyncThunk('contacts/addContact', async contact => {
  const response = await axios.post(
    'https://6432b5093e05ff8b372bf1e9.mockapi.io/contacst',
    contact
  );

  return response.data;
});
export const deleteContact = createAsyncThunk('contacts/deleteContact', async id => {
  const response = await axios.delete(
    `https://6432b5093e05ff8b372bf1e9.mockapi.io/contacst/${id}`
  );

  return response.data.id;
});
