import { configureStore } from '@reduxjs/toolkit';
import ContactSlice from './contactReduser';
import { FilterSlice } from './filterLogic';
export const store = configureStore({
  reducer: {
    contacts: ContactSlice,
    filter: FilterSlice.reducer,
  },
});
