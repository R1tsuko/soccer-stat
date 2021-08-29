import React from 'react';
import { useSelector } from 'react-redux';
import useQuery from '../../../hooks/useQuery';
import { selectMatches } from '../../../slices/calendarSlice';

const Calendar = (props) => {
  const page = useQuery().get('page');
  const matches = useSelector(selectMatches(page));
  const matchesArr = matches.map((match) => <props.calendarItem match={match} key={match.id} />);

  return <div>{matchesArr}</div>;
};

export default Calendar;
