import React, { Dispatch } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { IAction, IEpisode, IState } from '../types';
import { addFav, removeFav } from '../context/reducer';
import { box } from './styles';

interface Props {
  episode: IEpisode
}

const Episode = ({ episode }: Props): JSX.Element => {
  const dispatch = useDispatch<Dispatch<IAction>>();
  const favourites =
    useSelector<IState, Array<IEpisode>>(state => state.favourites);
  const style = { maxWidth: '29vh' }

  const handleClick = (): void => {
    if (!favourites.includes(episode)) {
      return dispatch(addFav([episode]));
    };
    const favWithoutEpisode: Array<IEpisode> =
      favourites.filter((fav: IEpisode) => fav.id !== episode.id);
    return dispatch(removeFav([...favWithoutEpisode]));
  };

  return (
    <section style={box}>
      <img src={episode.image.medium} alt={`South Park: ${episode.name}`} />
      <section style={style}>
        <div>{episode.name}</div>
        <div>Season: {episode.season} Number: {episode.number}</div>
        <button type="button" onClick={handleClick}>
          {favourites.includes(episode) ? 'Unfav' : 'Fav'}
        </button>
      </section>
    </section>
  );
};

export default Episode;