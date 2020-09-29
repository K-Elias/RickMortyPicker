import React, { Dispatch } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { IAction, IEpisode, IState } from '../types';
import { toggleFavAction } from '../context/actionContext';
import { box } from './styles';

interface Props {
  episode: IEpisode
}

const Episode = (props: Props): JSX.Element => {
  const { episode } = props;
  const dispatch = useDispatch<Dispatch<IAction>>();
  const state = useSelector<IState, IState>((state: IState) => state);

  return (
    <section style={box}>
      <img src={episode.image.medium} alt={`South Park: ${episode.name}`} />
      <section style={{ maxWidth: '29vh' }} >
        <div>{episode.name}</div>
        <div>Season: {episode.season} Number: {episode.number}</div>
        <button type="button"
          onClick={(): void => toggleFavAction(state, dispatch, episode)}>
          {state.favourites.includes(episode) ? 'Unfav' : 'Fav'}
        </button>
      </section>
    </section>
  );
};

export default Episode;