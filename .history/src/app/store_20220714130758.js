import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
