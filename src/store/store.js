import { configureStore } from '@reduxjs/toolkit';
import calendarReducer from '../slices/calendarSlice';
import listReducer from '../slices/listSlice';

export const store = configureStore({
  reducer: {
    list: listReducer,
    calendar: calendarReducer,
  },
});
