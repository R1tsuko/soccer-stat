import React from 'react';
import classes from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={classes.textContainer}>
      <h2>This app uses free API: football-data.org</h2>
      <div className={classes.pagesList}>
        <h3>Available pages:</h3>
        <ul>
          <li>list of leagues</li>
          <li>list of league`s teams</li>
          <li>league`s calendar</li>
          <li>team`s calendar</li>
        </ul>
      </div>
      <h3>Available server requests 10 per minute, so if you see load error, wait 1 minute</h3>
    </div>
  );
};

export default HomePage;
