import { createSlice } from '@reduxjs/toolkit';

const LikedSlice = createSlice({
  name: 'liked',
  initialState: {
    likedItems: [],
  },
  reducers: {
    toggleLike: (state, action) => {
      const id = action.payload;
      if (state.likedItems.includes(id)) {
        state.likedItems = state.likedItems.filter(itemId => itemId !== id);
      } else {
        state.likedItems.push(id);
       
      }
    },
  },
});

export const { toggleLike } = LikedSlice.actions;
export default LikedSlice.reducer;
