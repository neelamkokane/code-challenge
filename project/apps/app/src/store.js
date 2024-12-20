// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import listReducer from './features/list/listSlice.js'

const store = configureStore({
  reducer: {
    list: listReducer,
  },
});

export default store;
