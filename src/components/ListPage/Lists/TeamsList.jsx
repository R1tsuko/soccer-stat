import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ITEMS_ON_TEAMS_LIST_PAGE } from '../../../constants';
import useQuery from '../../../hooks/useQuery';
import {
  selectTeams,
  setIsFetching,
  setTeamsData,
  setTeamsSearchResult,
} from '../../../slices/listSlice';
import ErrorPage from '../../common/ErrorPage';
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
  const [error, setError] = useState(null);
  const query = useQuery();
  const searchResult = query.get('search');
  const { leagueId } = useParams();
  const teams = useSelector(selectTeams(query.get('page')));
  const numOfTeams = useSelector((state) => state.list.numOfTeams);
  const dispatch = useDispatch();
  const teamsArr = teams.map((team) => <TeamsListItem team={team} key={team.id} />);

  useEffect(() => {
    dispatch(setIsFetching(true));
    axios
      .get(`http://api.football-data.org/v2/competitions/${leagueId}/teams`, {
        headers: {
          'X-Auth-Token': process.env.REACT_APP_CODE,
        },
      })
      .then(
        (response) => {
          dispatch(setTeamsData(response.data.teams));
          dispatch(setTeamsSearchResult(searchResult)); // need to remove
        },
        (reject) => {
          setError(reject.response.status);
        }
      )
      .finally(() => dispatch(setIsFetching(false)));
  }, []);

  useEffect(() => {
    dispatch(setTeamsSearchResult(searchResult));
  }, [searchResult]);

  return !error ? (
    !props.isFetching ? (
      <div>
        <Pages numOfItems={numOfTeams} itemsOnPage={ITEMS_ON_TEAMS_LIST_PAGE} />
        <div>{teamsArr}</div>
      </div>
    ) : null
  ) : (
    <ErrorPage message="This content is not available" />
  );
};

export default TeamsList;
