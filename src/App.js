import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import classes from './App.module.css';
import CalendarPage from './components/CalendarPage/CalendarPage';
import Header from './components/Header/Header';
import ListPage from './components/ListPage/ListPage';

function App() {
  return (
    <div className={classes.appWrapper}>
      <Header />
      <div className={classes.content}>
        <Switch>
          <Route path="/leagues">
            <ListPage />
          </Route>
          <Route path="/calendar">
            <CalendarPage />
          </Route>
          <Route path="/">
            <Redirect to="/leagues?page=1" />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
