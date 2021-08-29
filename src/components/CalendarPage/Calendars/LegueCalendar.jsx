import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ITEMS_ON_CALENDAR_PAGE } from '../../../constants';
import useQuery from '../../../hooks/useQuery';
import { setIsFetching, setMatchesData } from '../../../slices/calendarSlice';
import ErrorPage from '../../common/ErrorPage';
import Pages from '../../common/Pages';
import Calendar from './Calendar';
import LeaguesCalendarItem from './Items/LeaguesCalendarItem';

const LeagueCalendar = (props) => {
  const [error, setError] = useState(null);
  const query = useQuery();
  const dateFrom = query.get('dateFrom');
  const dateTo = query.get('dateTo');
  const { leagueId } = useParams();
  const numOfMatches = useSelector((state) => state.calendar.numOfMatches);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsFetching(true));
    axios
      .get(
        `http://api.football-data.org/v2/competitions/${leagueId}/matches` +
          (query.get('dateFrom')
            ? `?dateFrom=${query.get('dateFrom')}&dateTo=${query.get('dateTo')}`
            : ''),
        {
          headers: {
            'X-Auth-Token': process.env.REACT_APP_CODE,
          },
        }
      )
      .then(
        (response) => {
          dispatch(setMatchesData(response.data.matches));
        },
        (reject) => {
          setError(reject.response.status);
        }
      )
      .finally(() => {
        dispatch(setIsFetching(false));
      });
  }, [dateFrom, dateTo]);

  return !error ? (
    !props.isFetching ? (
      <div>
        HERE IS A LEAGUE CALENDAR
        <Pages numOfItems={numOfMatches} itemsOnPage={ITEMS_ON_CALENDAR_PAGE} />
        <Calendar calendarItem={LeaguesCalendarItem} />
      </div>
    ) : null
  ) : (
    <ErrorPage message="This content is not available" />
  );
};

export default LeagueCalendar;
