import { createSlice } from '@reduxjs/toolkit';

const AddSlice = createSlice({
  name: 'additems',
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
    },
    removeItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload); 
    },
  },
});

export const { addItem, removeItem } = AddSlice.actions;
export default AddSlice.reducer;
