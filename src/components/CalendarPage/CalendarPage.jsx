import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch, useParams } from 'react-router-dom';
import Calendar from './Calendars/Calendar';
import LeaguesCalendarItem from './Calendars/Items/LeaguesCalendarItem';
import TeamsCalendarItem from './Calendars/Items/TeamsCalendarItem';
import DateFilterInput from './DateFilterInput/DateFilterInput';

const CalendarPage = () => {
  const isFetching = useSelector((state) => state.calendar.isFetching);
  const { teamId, leagueId } = useParams();
  return (
    <div>
      <DateFilterInput disabled={isFetching} />
      <Switch>
        <Route path="/calendar/team">
          <Calendar
            url={`teams/${teamId}/matches`}
            isFetching={isFetching}
            item={TeamsCalendarItem}
          />
        </Route>
        <Route path="/calendar/league">
          <Calendar
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
