import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.football-data.org/v2/',
  headers: { 'X-Auth-Token': process.env.REACT_APP_CODE },
});

export const getCompetitions = () => {
  return instance
    .get('competitions', {
      params: {
        plan: 'TIER_ONE',
      },
    })
    .then((response) => response.data);
};
export const getTeams = (leagueId) => {
  return instance.get(`competitions/${leagueId}/teams`).then((response) => response.data);
};
export const getLeagueMatches = (leagueId, dateFrom, dateTo) => {
  return instance
    .get(`competitions/${leagueId}/matches`, {
      params: {
        dateFrom,
        dateTo,
      },
    })
    .then((response) => response.data);
};
export const getTeamMatches = (teamId, dateFrom, dateTo) => {
  return instance
    .get(`teams/${teamId}/matches`, {
      params: {
        dateFrom,
        dateTo,
      },
    })
    .then((response) => response.data);
};
export const getMatches = (url, dateFrom, dateTo) => {
  return instance
    .get(url, {
      params: {
        dateFrom,
        dateTo,
      },
    })
    .then((response) => response.data);
};
