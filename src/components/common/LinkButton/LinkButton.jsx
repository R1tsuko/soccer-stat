import classes from './LinkButton.module.css';
import React from 'react';
import { Link } from 'react-router-dom';

const LinkButton = (props) => {
  return (
    <span className={classes.link}>
      <Link to={props.to}>{props.text}</Link>
    </span>
  );
};

export default LinkButton;
