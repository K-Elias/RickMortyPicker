import React from 'react';
import { useSelector } from 'react-redux';

import { IEpisode, IState } from '../types';
import { layout } from './styles';
import Episode from './Episode';

interface Props {
  path: string
};

const EpisodeList = (props: Props): JSX.Element => {
  const state = useSelector<IState, IState>((state: IState) => state);

  if (state.episodes.length === 0) {
    return <h2>Loading...</h2>
  }
  let data: Array<IEpisode> = [];
  if (props.path === '/') data = state.episodes;
  else if (props.path === '/fav') data = state.favourites
  else return <h2>404, page doesn't exist...</h2>
  console.log(state);
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