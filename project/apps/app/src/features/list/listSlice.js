import { createSlice } from '@reduxjs/toolkit';

export const listSlice = createSlice({
  name: 'list',
  initialState: {
    list: [],
  },
  reducers: {
    setList: (state, action) => {
      state.list = action.payload
    },
    removeItem: (state, action) => {
      state.list = state.list.filter(item => item.name !== action.payload)
    }    
  },
});

export const { setList, removeItem } = listSlice.actions;

export default listSlice.reducer;
