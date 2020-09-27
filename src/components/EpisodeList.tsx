import React, { useContext } from 'react';

import { box, layout } from './styles';
import { toggleFavAction } from '../context/actionContext'
import { IEpisode } from '../types';
import { Store } from '../Store';

interface Props { path: string }

const EpisodeList = (props: Props): JSX.Element => {
  const { state, dispatch } = useContext(Store);

  if (state.episodes.length === 0) {
    return <h2>Loading...</h2>
  }

  let data: Array<IEpisode> = [];
  if (props.path === '/') data = state.episodes;
  else if (props.path === '/fav') data = state.favourites
  else return <h2>404, page doesn't exist...</h2>

  return (
    <section style={layout}>
      {data.map((episode: IEpisode) => (
        <section style={box} key={episode.id}>
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
      ))}
    </section>
  );
}

export default EpisodeList;