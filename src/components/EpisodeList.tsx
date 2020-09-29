import { useSelector, shallowEqual } from 'react-redux';
import { useLocation } from 'react-router-dom';
import React from 'react';

import { IEpisode, IState } from '../types';
import { layout } from './styles';
import Episode from './Episode';

const EpisodeList = (): JSX.Element => {
  const { pathname } = useLocation<string>();
  const { episodes, favourites } =
    useSelector<IState, IState>((state: IState) => state, shallowEqual);

  if (episodes.length === 0) {
    return <h2>Loading...</h2>
  }

  let data: Array<IEpisode> = [];
  if (pathname === '/') data = episodes;
  else if (pathname === '/fav') data = favourites;
  else return <h2>404, page doesn't exist...</h2>
  console.log('oulouloulou')
  return (
    <section style={layout}>
      {data.map((episode: IEpisode) =>
        <Episode
          key={episode.id}
          episode={episode}
        />
      )}
    </section>
  );
}

export default EpisodeList;