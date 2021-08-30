import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <Link className={classes.navlink} to="/home">
        home
      </Link>
      <Link className={classes.navlink} to="/leagues?page=1">
        leagues
      </Link>
    </header>
  );
};

export default Header;
