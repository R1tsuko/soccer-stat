import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch, useParams } from 'react-router-dom';
import CalendarList from './CalendarList';
import LeaguesCalendarItem from './Items/LeaguesCalendarItem';
import TeamsCalendarItem from './Items/TeamsCalendarItem';
import DateFilterInput from './DateFilterInput/DateFilterInput';

const CalendarPage = () => {
  const isFetching = useSelector((state) => state.calendar.isFetching);
  const { teamId, leagueId } = useParams();
  return (
    <div>
      <DateFilterInput disabled={isFetching} />
      <Switch>
        <Route path="/calendar/team">
          <CalendarList
            url={`teams/${teamId}/matches`}
            isFetching={isFetching}
            item={TeamsCalendarItem}
          />
        </Route>
        <Route path="/calendar/league">
          <CalendarList
            url={`competitions/${leagueId}/matches`}
            isFetching={isFetching}
            item={LeaguesCalendarItem}
          />
        </Route>
      </Switch>
    </div>
  );
};

export default CalendarPage;
