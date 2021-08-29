import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import classes from './SearchForm.module.css';
import searchIcon from '../../../images/searchIcon.png';

const SearchForm = (props) => {
  const [query, setQuery] = useState('');
  const history = useHistory();

  const onChangeInput = (e) => {
    setQuery(e.target.value);
  };

  const onSubmitForm = (e) => {
    const params = new URLSearchParams();
    query ? params.append('search', query) : params.delete('search');
    params.append('page', 1);

    history.push({ search: params.toString() });
    e.preventDefault();
    setQuery('');
  };

  return (
    <form onSubmit={onSubmitForm}>
      <span>
        <input
          disabled={props.disabled}
          className={classes.searchInput}
          type="text"
          value={query}
          onChange={onChangeInput}
        />
      </span>
      <span>
        <button disabled={props.disabled} className={classes.searchButton} type="submit">
          <img src={searchIcon} />
        </button>
      </span>
    </form>
  );
};

export default SearchForm;
