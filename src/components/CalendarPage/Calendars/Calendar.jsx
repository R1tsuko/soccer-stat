import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMatches } from '../../../api';
import { ITEMS_ON_CALENDAR_PAGE } from '../../../constants';
import useQuery from '../../../hooks/useQuery';
import { selectMatches, setIsFetching, setMatchesData } from '../../../slices/calendarSlice';
import ErrorPage from '../../common/ErrorPage';
import Pages from '../../common/Pages';

const Calendar = (props) => {
  const [error, setError] = useState(false);
  const query = useQuery();
  const matches = useSelector(selectMatches(query.get('page')));
  const dateFrom = query.get('dateFrom');
  const dateTo = query.get('dateTo');
  const dispatch = useDispatch();
  const numOfMatches = useSelector((state) => state.calendar.numOfMatches);

  useEffect(() => {
    dispatch(setIsFetching(true));
    getMatches(props.url, dateFrom, dateTo)
      .then(
        (response) => {
          dispatch(setMatchesData(response.matches));
          setError(false);
        },
        (reject) => {
          setError(true);
        }
      )
      .finally(() => {
        dispatch(setIsFetching(false));
      });
  }, [dateFrom, dateTo]);

  const matchesArr = matches.map((match) => <props.item match={match} key={match.id} />);

  return !props.isFetching ? (
    !error ? (
      <div>
        <Pages numOfItems={numOfMatches} itemsOnPage={ITEMS_ON_CALENDAR_PAGE} />
        <div>{matchesArr}</div>
      </div>
    ) : (
      <ErrorPage message="Unable to load data" />
    )
  ) : null;
};

export default Calendar;
