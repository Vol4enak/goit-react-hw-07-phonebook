import { combineReducers, configureStore } from '@reduxjs/toolkit';
import ContactSlice from './contactReduser';
import { FilterSlice } from './filterLogic';
const rootRedusers = combineReducers({});

export const store = configureStore({
  reducer: {
    contacts: ContactSlice,
    filter: FilterSlice.reducer,
  },
});
