import React, {
  useContext,
  Fragment,
  useEffect,
  CSSProperties,
  ReactNode
} from 'react';

import { IAction, IEpisode } from './types'
import { Store } from './Store';

const App = (): JSX.Element => {
  const { state, dispatch } = useContext(Store);

  const URL = 'https://api.tvmaze.com/singlesearch/shows?q=south-park&embed=episodes';

  const fetchDataAction = async (): Promise<void> => {
    const data = await fetch(URL);
    const dataJSON = await data.json();
    return dispatch({
      type: 'FETCH_DATA',
      payload: dataJSON._embedded.episodes
    });
  }

  useEffect(() => {
    state.episodes.length === 0 && fetchDataAction();
  });

  const episodeLayout: CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: '100vh'
  };

  const episodeBox: CSSProperties = {
    padding: '.5rem'
  };

  const headerStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    background: 'white',
    borderBottom: '1px solid black',
    padding: '.5rem',
    position: 'sticky',
    top: 0
  }

  const favEpisode: (ReactNode | null) = state.episodes.length > 0 &&
    state.episodes.map((episode: IEpisode) => (
      <section style={episodeBox} key={episode.id}>
        <img src={episode.image.medium} alt={`South Park: ${episode.name}`} />
        <section style={{ maxWidth: '29vh' }} >
          <div>{episode.name}</div>
          <div>Season: {episode.season} Number: {episode.number}</div>
          <button type="button" onClick={() => toggleFavAction(episode)}>Fav</button>
        </section>
      </section>
    ));

  const toggleFavAction = (episode: IEpisode): void => dispatch({
    type: 'ADD_FAV',
    payload: [episode]
  })

  return (
    <Fragment>
      <header style={headerStyle}>
        <h1>South Park</h1>
        <p>Pick your favourite episode</p>
      </header>
      <section style={episodeLayout}>
        {favEpisode}
      </section>
    </Fragment>
  );
};

export default App;