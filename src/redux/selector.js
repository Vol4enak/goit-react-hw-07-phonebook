import { createSelector } from '@reduxjs/toolkit';
import contactsFiltration from '../components/services/contactFiltration';

export const selectFilter = state => state.filter.filter;
export const selectContacts = state => state.contacts.items;
export const filteredContacts = createSelector(
  [selectContacts, selectFilter],(contacts, filter) => contactsFiltration(contacts, filter)
);
