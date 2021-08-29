import React from 'react';
import classes from './CalendarItem.module.css';

const LeaguesCalendarItem = (props) => {
  return (
    <div className={classes.item}>
      <div className={classes.text}>
        {props.match.homeTeam.name} vs {props.match.awayTeam.name}
      </div>
      <div className={classes.text}>start: {props.match.utcDate}</div>
      <div className={classes.scores}>
        <span>
          {props.match.score.halfTime.homeTeam === null ? '-' : props.match.score.halfTime.awayTeam}
          :
          {props.match.score.halfTime.homeTeam === null ? '-' : props.match.score.halfTime.awayTeam}
        </span>
        {'  '}
        <span>
          {props.match.score.fullTime.homeTeam === null ? '-' : props.match.score.fullTime.awayTeam}
          :
          {props.match.score.fullTime.homeTeam === null ? '-' : props.match.score.fullTime.awayTeam}
        </span>
        {'  '}
        <span>
          {props.match.score.extraTime.homeTeam === null
            ? '-'
            : props.match.score.extraTime.awayTeam}
          :
          {props.match.score.extraTime.homeTeam === null
            ? '-'
            : props.match.score.extraTime.awayTeam}
        </span>
        {'  '}
        <span>
          {props.match.score.penalties.homeTeam === null
            ? '-'
            : props.match.score.penalties.awayTeam}
          :
          {props.match.score.penalties.homeTeam === null
            ? '-'
            : props.match.score.penalties.awayTeam}
        </span>
      </div>
    </div>
  );
};

export default LeaguesCalendarItem;
