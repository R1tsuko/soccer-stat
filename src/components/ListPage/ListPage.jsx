import React from 'react';
import classes from './ListPage.module.css';
import LeaguesList from './Lists/LeaguesList';
import SearchForm from './SearchForm/SearchForm';
import { Route, Switch } from 'react-router-dom';
import TeamsList from './Lists/TeamsList';
import { useSelector } from 'react-redux';

const ListPage = () => {
  const isFetching = useSelector((state) => state.list.isFetching);

  return (
    <div className={classes.content}>
      <SearchForm disabled={isFetching} />
      <Switch>
        <Route path="/leagues/:leagueId">
          <TeamsList isFetching={isFetching} />
        </Route>
        <Route path="/leagues">
          <LeaguesList isFetching={isFetching} />
        </Route>
      </Switch>
    </div>
  );
};

export default ListPage;
