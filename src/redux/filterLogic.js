import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  filter: '',
};

export const FilterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    trowFilterValue(state, actions) {
      state.filter = actions.payload;
    },
  },
});

export const { trowFilterValue, visibleContact } = FilterSlice.actions;
