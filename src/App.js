import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import classes from './App.module.css';
import CalendarPage from './components/CalendarPage/CalendarPage';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import ListPage from './components/ListPage/ListPage';

function App() {
  return (
    <div className={classes.appWrapper}>
      <Header />
      <div className={classes.content}>
        <Switch>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/leagues">
            <ListPage />
          </Route>
          <Route path="/calendar/team/:teamId">
            <CalendarPage />
          </Route>
          <Route path="/calendar/league/:leagueId">
            <CalendarPage />
          </Route>
          <Route path="/">
            <Redirect to="/home" />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
