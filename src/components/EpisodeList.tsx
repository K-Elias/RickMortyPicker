import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import React from 'react';

import { IEpisode, IState } from '../types';
import { layout } from './styles';
import Episode from './Episode';

const EpisodeList = (): JSX.Element => {
  const { pathname } = useLocation<string>();
  const list = useSelector<IState, Array<IEpisode>>((state: IState) => {
    return pathname === '/' ? state.episodes : state.favourites
  });

  return (
    <section style={layout}>
      {list.map((episode: IEpisode) =>
        <Episode
          key={episode.id}
          episode={episode}
        />
      )}
    </section>
  );
}

export default EpisodeList;