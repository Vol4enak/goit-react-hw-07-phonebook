import { fetchContacts, addContact, deleteContact } from './contactsOperation';
const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};
const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const handlePending = state => {
  state.isLoading = true;
};

const contactSlise = createSlice({
  name: 'contats',
  initialState,
  extraReducers: {
    
    [fetchContacts.pending]: handlePending,
    [addContact.pending]: handlePending,
    [deleteContact.pending]: handlePending,

  
    [fetchContacts.rejected]: handleRejected,
    [addContact.rejected]: handleRejected,
    [deleteContact.rejected]: handleRejected,

    
    [fetchContacts.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.items = payload;
    },
   
    [addContact.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.items.unshift(payload);
    },
    [deleteContact.fulfilled](state, { payload }) {
      const index = state.items.findIndex(contact => contact.id === payload);

      state.isLoading = false;
      state.error = null;
      state.items.splice(index, 1);
    },
  },
});

export default contactSlise.reducer;
