import { configureStore } from '@reduxjs/toolkit';
import toDoSlice from '../redux/Slice/toDoSlice';

export const store = configureStore({
  reducer: {
    toDo : toDoSlice
  },
});
