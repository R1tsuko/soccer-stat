import React from 'react';
import classes from './ErrorPage.module.css';

const ErrorPage = (props) => {
  return <div className={classes.errorText}>{props.message}</div>;
};

export default ErrorPage;
