import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ITEMS_ON_LEAGUES_LIST_PAGE } from '../../../constants';
import useQuery from '../../../hooks/useQuery';
import {
  getCompetitionsThunk,
  selectLeagues,
  setLeaguesSearchResult,
} from '../../../slices/listSlice';
import LinkButton from '../../common/LinkButton/LinkButton';
import Pages from '../../common/Pages';
import classes from '../ListPage.module.css';

const LeaguesListItem = (props) => {
  return (
    <div>
      <div>
        <span className={classes.smallCountryFlag}>
          <img src={props.league.area.ensignUrl} />
        </span>
        <span className={classes.listItemText}>{props.league.area.name} |</span>
        <span className={classes.listItemText}> {props.league.name}</span>
      </div>
      <LinkButton to={`/leagues/${props.league.id}?page=1`} text="Go To Teams" />
      <LinkButton to={`/calendar/league/${props.league.id}?page=1`} text="Go To Calendar" />
    </div>
  );
};

const LeaguesList = (props) => {
  const query = useQuery();
  const searchResult = query.get('search');
  const leagues = useSelector(selectLeagues(query.get('page')));
  const numOfLeagues = useSelector((state) => state.list.numOfLeagues);
  const dispatch = useDispatch();
  const leaguesArr = leagues.map((league) => <LeaguesListItem league={league} key={league.id} />);

  useEffect(() => {
    dispatch(getCompetitionsThunk());
  }, []);

  useEffect(() => {
    dispatch(setLeaguesSearchResult(searchResult));
  }, [searchResult, props.isFetching]);

  return !props.isFetching ? (
    <div>
      <Pages numOfItems={numOfLeagues} itemsOnPage={ITEMS_ON_LEAGUES_LIST_PAGE} />
      <div>{leaguesArr}</div>
    </div>
  ) : null;
};

export default LeaguesList;
