import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <Link className={classes.home} to="/">
        Home
      </Link>
    </header>
  );
};

export default Header;
