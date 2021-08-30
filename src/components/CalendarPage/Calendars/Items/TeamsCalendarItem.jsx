import React from 'react';
import classes from './CalendarItem.module.css';

const TeamsCalendarItem = (props) => {
  debugger;
  return (
    <div className={classes.item}>
      <div className={classes.text}>
        {props.match.homeTeam.name} vs {props.match.awayTeam.name}
      </div>
      <div className={classes.text}>
        <img src={props.match.competition?.area.ensignUrl} />
        {props.match.competition?.name}
      </div>
      <div className={classes.text}>start: {props.match.utcDate}</div>
      <div className={classes.scores}>
        <span>
          {props.match.score.halfTime.homeTeam === null ? '-' : props.match.score.halfTime.homeTeam}
          :
          {props.match.score.halfTime.awayTeam === null ? '-' : props.match.score.halfTime.awayTeam}
        </span>
        {'  '}
        <span>
          {props.match.score.fullTime.homeTeam === null ? '-' : props.match.score.fullTime.homeTeam}
          :
          {props.match.score.fullTime.awayTeam === null ? '-' : props.match.score.fullTime.awayTeam}
        </span>
        {'  '}
        <span>
          {props.match.score.extraTime.homeTeam === null
            ? '-'
            : props.match.score.extraTime.homeTeam}
          :
          {props.match.score.extraTime.awayTeam === null
            ? '-'
            : props.match.score.extraTime.awayTeam}
        </span>
        {'  '}
        <span>
          {props.match.score.penalties.homeTeam === null
            ? '-'
            : props.match.score.penalties.homeTeam}
          :
          {props.match.score.penalties.awayTeam === null
            ? '-'
            : props.match.score.penalties.awayTeam}
        </span>
      </div>
    </div>
  );
};

export default TeamsCalendarItem;
