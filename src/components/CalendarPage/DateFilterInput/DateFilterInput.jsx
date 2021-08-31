import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import classes from './DateFilterInput.module.css';
import searchIcon from '../../../images/searchIcon.png';

const testDate = (date) => {
  return /^\d{0,4}$|^\d{4}-\d{0,2}$|^\d{4}-\d{2}-\d{0,2}$/.test(date);
};

const DateFilterInput = (props) => {
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const history = useHistory();

  const onChangeDateFrom = (e) => {
    testDate(e.target.value) ? setDateFrom(e.target.value) : 0;
  };
  const onChangeDateTo = (e) => {
    testDate(e.target.value) ? setDateTo(e.target.value) : 0;
  };

  const onSubmitForm = (e) => {
    const params = new URLSearchParams();
    dateFrom ? params.append('dateFrom', dateFrom) : params.delete('dateFrom');
    dateTo ? params.append('dateTo', dateTo) : params.delete('dateTo');
    params.append('page', 1);

    history.push({ search: params.toString() });
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmitForm}>
      <span>
        <label className={classes.label}>from</label>
        <input
          type="text"
          value={dateFrom}
          onChange={onChangeDateFrom}
          placeholder="YYYY-MM-DD"
          disabled={props.disabled}
          className={classes.dateInput}
        />
      </span>
      <span>
        <label className={classes.label}>to</label>
        <input
          type="text"
          value={dateTo}
          onChange={onChangeDateTo}
          placeholder="YYYY-MM-DD"
          disabled={props.disabled}
          className={classes.dateInput}
        />
      </span>
      <span>
        <button type="submit" disabled={props.disabled} className={classes.searchButton}>
          <img src={searchIcon} />
        </button>
      </span>
    </form>
  );
};

export default DateFilterInput;
