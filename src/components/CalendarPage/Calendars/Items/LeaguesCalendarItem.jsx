import React from 'react';
import classes from './CalendarItem.module.css';

const LeaguesCalendarItem = (props) => {
  const score = props.match.score;
  return (
    <div className={classes.item}>
      <div className={classes.text}>
        {props.match.homeTeam.name}{' '}
        <span className={classes.mainScore}>
          {score.fullTime.homeTeam + score.extraTime.homeTeam}:
          {score.fullTime.awayTeam + score.extraTime.awayTeam}
        </span>{' '}
        {props.match.awayTeam.name}
      </div>
      <div className={classes.text}>start: {props.match.utcDate}</div>
      <div className={classes.scores}>
        <span>
          {score.halfTime.homeTeam === null ? '-' : score.halfTime.homeTeam}:
          {score.halfTime.awayTeam === null ? '-' : score.halfTime.awayTeam}
        </span>
        {'  '}
        <span>
          {score.fullTime.homeTeam === null ? '-' : score.fullTime.homeTeam}:
          {score.fullTime.awayTeam === null ? '-' : score.fullTime.awayTeam}
        </span>
        {'  '}
        <span>
          {score.extraTime.homeTeam === null ? '-' : score.extraTime.homeTeam}:
          {score.extraTime.awayTeam === null ? '-' : score.extraTime.awayTeam}
        </span>
        {'  '}
        <span>
          {score.penalties.homeTeam === null ? '-' : score.penalties.homeTeam}:
          {score.penalties.awayTeam === null ? '-' : score.penalties.awayTeam}
        </span>
      </div>
    </div>
  );
};

export default LeaguesCalendarItem;
