import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import LeagueCalendar from './Calendars/LegueCalendar';
import TeamCalendar from './Calendars/TeamCalendar';
import DateFilterInput from './DateFilterInput/DateFilterInput';

const CalendarPage = () => {
  const isFetching = useSelector((state) => state.calendar.isFetching);
  return (
    <div>
      <DateFilterInput disabled={isFetching} />
      <Switch>
        <Route exact path="/calendar/team/:teamId">
          <TeamCalendar isFetching={isFetching} />
        </Route>
        <Route exact path="/calendar/league/:leagueId">
          <LeagueCalendar isFetching={isFetching} />
        </Route>
      </Switch>
    </div>
  );
};

export default CalendarPage;
