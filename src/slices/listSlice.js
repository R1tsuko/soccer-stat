import { createSlice } from '@reduxjs/toolkit';
import { ITEMS_ON_LEAGUES_LIST_PAGE, ITEMS_ON_TEAMS_LIST_PAGE } from '../constants';

const initialState = {
  leaguesData: [],
  teamsData: [],
  leaguesSearchResult: [],
  teamsSearchResult: [],
  numOfLeagues: null,
  numOfTeams: null,
  isFetching: false,
};

export const listSlice = createSlice({
  name: 'list',
  initialState,

  reducers: {
    setIsFetching: (state, action) => {
      state.isFetching = action.payload;
    },
    setLeaguesData: (state, action) => {
      state.leaguesData = action.payload;
    },
    setTeamsData: (state, action) => {
      state.teamsData = action.payload;
    },
    setLeaguesSearchResult: (state, action) => {
      state.leaguesSearchResult = action.payload
        ? state.leaguesData.filter((l) =>
            l.name.toLowerCase().includes(action.payload.toLowerCase())
          )
        : state.leaguesData;

      state.numOfLeagues = state.leaguesSearchResult.length;
    },
    setTeamsSearchResult: (state, action) => {
      state.teamsSearchResult = action.payload
        ? state.teamsData.filter((l) => l.name.toLowerCase().includes(action.payload.toLowerCase()))
        : state.teamsData;

      state.numOfTeams = state.teamsSearchResult.length;
    },
  },
});

export const {
  setLeaguesData,
  setTeamsData,
  setLeaguesSearchResult,
  setTeamsSearchResult,
  setIsFetching,
} = listSlice.actions;

export const selectLeagues = (page) => {
  return (state) => {
    state = state.list;
    return state.leaguesSearchResult.filter(
      (l, i) =>
        i >= (page - 1) * ITEMS_ON_LEAGUES_LIST_PAGE && i < page * ITEMS_ON_LEAGUES_LIST_PAGE
    );
  };
};
export const selectTeams = (page) => {
  return (state) => {
    state = state.list;
    return state.teamsSearchResult.filter(
      (t, i) => i >= (page - 1) * ITEMS_ON_TEAMS_LIST_PAGE && i < page * ITEMS_ON_TEAMS_LIST_PAGE
    );
  };
};

export default listSlice.reducer;
