import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
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
