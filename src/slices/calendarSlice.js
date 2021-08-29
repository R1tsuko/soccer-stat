import { createSlice } from '@reduxjs/toolkit';
import { ITEMS_ON_CALENDAR_PAGE } from '../constants';

const initialState = {
  matchesData: [],
  numOfMatches: null,
  isFetching: false,
};

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState,

  reducers: {
    setIsFetching: (state, action) => {
      state.isFetching = action.payload;
    },
    setMatchesData: (state, action) => {
      state.matchesData = action.payload;
      state.numOfMatches = action.payload.length;
    },
  },
});

export const { setMatchesData, setIsFetching } = calendarSlice.actions;

export const selectMatches = (page) => {
  return (state) => {
    state = state.calendar;
    return state.matchesData.filter(
      (m, i) => i >= (page - 1) * ITEMS_ON_CALENDAR_PAGE && i < page * ITEMS_ON_CALENDAR_PAGE
    );
  };
};

export default calendarSlice.reducer;
