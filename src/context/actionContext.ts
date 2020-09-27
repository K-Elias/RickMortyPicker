import { Dispatch } from 'react';

import { IAction, IEpisode, IState } from '../types';

export const toggleFavAction = (
  state: IState,
  dispatch: Dispatch<IAction>,
  episode: IEpisode
): void => {

  if (!state.favourites.includes(episode)) {
    return dispatch({
      type: 'ADD_FAV',
      payload: [episode]
    });
  };
  const favWithoutEpisode: Array<IEpisode> =
    state.favourites.filter((fav: IEpisode) => fav.id !== episode.id);
  return dispatch({
    type: 'REMOVE_FAV',
    payload: [...favWithoutEpisode]
  });
};

export const fetchDataAction = async (dispatch: Dispatch<IAction>): Promise<void> => {
  const URL = 'https://api.tvmaze.com/singlesearch/shows?q=south-park&embed=episodes';
  const data = await fetch(URL);
  const dataJSON = await data.json();
  return dispatch({
    type: 'FETCH_DATA',
    payload: [...dataJSON._embedded.episodes]
  });
};