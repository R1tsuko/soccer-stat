import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import classes from './DateFilterInput.module.css';
import searchIcon from '../../../images/searchIcon.png';

const DateFilterInput = (props) => {
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const history = useHistory();

  const onChangeDateFrom = (e) => {
    setDateFrom(e.target.value);
  };
  const onChangeDateTo = (e) => {
    setDateTo(e.target.value);
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
        <input
          type="text"
          value={dateFrom}
          onChange={onChangeDateFrom}
          pattern="\d\d\d\d-\d\d-\d\d"
          placeholder="YYYY-MM-DD"
          disabled={props.disabled}
          className={classes.dateInput}
        />
      </span>
      <span>
        <input
          type="text"
          value={dateTo}
          onChange={onChangeDateTo}
          pattern="\d\d\d\d-\d\d-\d\d"
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
