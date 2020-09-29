import axios from 'axios';

import { IAction, IEpisode, IState } from '../types';
import { addFav, fetchData, removeFav } from './reducer';
import { Dispatch } from 'react';

export const toggleFavAction = (
  state: IState,
  dispatch: Dispatch<IAction>,
  episode: IEpisode
): void => {
  if (!state.favourites.includes(episode)) {
    return dispatch(addFav([episode]));
  };
  const favWithoutEpisode: Array<IEpisode> =
    state.favourites.filter((fav: IEpisode) => fav.id !== episode.id);
  return dispatch(removeFav([...favWithoutEpisode]));
};

export const fetchDataAction = async (dispatch: Dispatch<IAction>): Promise<void> => {
  const URL = 'https://api.tvmaze.com/singlesearch/shows?q=south-park&embed=episodes';
  const dataFetched = await axios.get(URL);
  const dataJSON = dataFetched.data;
  return dispatch(fetchData([...dataJSON._embedded.episodes]));
};