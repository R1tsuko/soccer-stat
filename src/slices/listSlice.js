import { createSlice } from '@reduxjs/toolkit';
import { getCompetitions, getTeams } from '../api';
import { ITEMS_ON_LEAGUES_LIST_PAGE, ITEMS_ON_TEAMS_LIST_PAGE } from '../constants';

const initialState = {
  leaguesData: [],
  teamsData: [],
  leaguesSearchResult: [],
  teamsSearchResult: [],
  numOfLeagues: null,
  numOfTeams: null,
  isFetching: false,
  fetchingError: false,
};

export const listSlice = createSlice({
  name: 'list',
  initialState,

  reducers: {
    setFetchingError: (state, action) => {
      state.fetchingError = action.payload;
    },
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
  setFetchingError,
} = listSlice.actions;

export const getCompetitionsThunk = () => (dispatch, getState) => {
  dispatch(setIsFetching(true));
  getCompetitions()
    .then(
      (response) => {
        dispatch(setLeaguesData(response.competitions));
        dispatch(setFetchingError(false));
      },
      (reject) => {
        dispatch(setFetchingError(true));
      }
    )
    .finally(() => {
      dispatch(setIsFetching(false));
    });
};
export const getTeamsThunk = (leagueId) => (dispatch, getState) => {
  dispatch(setIsFetching(true));
  getTeams(leagueId)
    .then(
      (response) => {
        dispatch(setTeamsData(response.teams));
        dispatch(setFetchingError(false));
      },
      (reject) => {
        dispatch(setFetchingError(true));
      }
    )
    .finally(() => dispatch(setIsFetching(false)));
};

const selectWithPageFilter = (arrayToSelect, page, itemsOnPage) => {
  return arrayToSelect.filter((el, i) => i >= (page - 1) * itemsOnPage && i < page * itemsOnPage);
};

export const selectLeagues = (page) => {
  return (state) => {
    return selectWithPageFilter(state.list.leaguesSearchResult, page, ITEMS_ON_LEAGUES_LIST_PAGE);
  };
};
export const selectTeams = (page) => {
  return (state) => {
    return selectWithPageFilter(state.list.teamsSearchResult, page, ITEMS_ON_TEAMS_LIST_PAGE);
  };
};

export default listSlice.reducer;
