import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import useQuery from '../../../hooks/useQuery';
import classes from './Pages.module.css';

const Pages = (props) => {
  const query = useQuery();
  const loc = useLocation();
  const pagesArr = [];
  for (let i = 1; i <= Math.ceil(props.numOfItems / props.itemsOnPage); ++i) {
    query.set('page', i);
    pagesArr.push(
      <span className={classes.pageLink} key={i}>
        <NavLink to={loc.pathname + '?' + query.toString()}>{i} </NavLink>
      </span>
    );
  }

  return <div>{pagesArr}</div>;
};

export default Pages;
