import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ITEMS_ON_TEAMS_LIST_PAGE } from '../../../constants';
import useQuery from '../../../hooks/useQuery';
import { getTeamsThunk, selectTeams, setTeamsSearchResult } from '../../../slices/listSlice';
import LinkButton from '../../common/LinkButton/LinkButton';
import Pages from '../../common/Pages';
import classes from '../ListPage.module.css';

const TeamsListItem = (props) => {
  return (
    <div>
      <div>
        <span className={classes.clubImg}>
          <img src={props.team.crestUrl} />
        </span>
        <span className={classes.listItemText}>{props.team.name}</span>
      </div>
      <div>
        <LinkButton to={`/calendar/team/${props.team.id}?page=1`} text="Go To Calendar" />
      </div>
    </div>
  );
};

const TeamsList = (props) => {
  const query = useQuery();
  const searchResult = query.get('search');
  const { leagueId } = useParams();
  const teams = useSelector(selectTeams(query.get('page')));
  const numOfTeams = useSelector((state) => state.list.numOfTeams);
  const dispatch = useDispatch();
  const teamsArr = teams.map((team) => <TeamsListItem team={team} key={team.id} />);

  useEffect(() => {
    dispatch(getTeamsThunk(leagueId));
  }, []);

  useEffect(() => {
    dispatch(setTeamsSearchResult(searchResult));
  }, [searchResult, props.isFetching]);

  return !props.isFetching ? (
    <div>
      <Pages numOfItems={numOfTeams} itemsOnPage={ITEMS_ON_TEAMS_LIST_PAGE} />
      <div>{teamsArr}</div>
    </div>
  ) : null;
};

export default TeamsList;
