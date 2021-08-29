import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ITEMS_ON_CALENDAR_PAGE } from '../../../constants';
import useQuery from '../../../hooks/useQuery';
import { setIsFetching, setMatchesData } from '../../../slices/calendarSlice';
import Pages from '../../common/Pages';
import Calendar from './Calendar';
import TeamsCalendarItem from './Items/TeamsCalendarItem';

const TeamCalendar = (props) => {
  const query = useQuery();
  const dateFrom = query.get('dateFrom');
  const dateTo = query.get('dateTo');
  const { teamId } = useParams();
  const dispatch = useDispatch();
  const numOfMatches = useSelector((state) => state.calendar.numOfMatches);

  useEffect(() => {
    dispatch(setIsFetching(true));
    axios
      .get(
        `http://api.football-data.org/v2/teams/${teamId}/matches` +
          (dateFrom ? `?dateFrom=${dateFrom}&dateTo=${dateTo}` : ''),
        {
          headers: {
            'X-Auth-Token': process.env.REACT_APP_CODE,
          },
        }
      )
      .then((response) => {
        debugger;
        dispatch(setMatchesData(response.data.matches));
      })
      .finally(() => {
        dispatch(setIsFetching(false));
      });
  }, [dateFrom, dateTo]);

  return !props.isFetching ? (
    <div>
      HERE IS A TEAM CALENDAR
      <Pages numOfItems={numOfMatches} itemsOnPage={ITEMS_ON_CALENDAR_PAGE} />
      <Calendar calendarItem={TeamsCalendarItem} />
    </div>
  ) : null;
};

export default TeamCalendar;
