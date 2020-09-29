import React, {
  lazy,
  Suspense,
  Fragment,
  useEffect,
  Dispatch,
  useCallback
} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios'

import { fetchData, } from './context/reducer';
import { IAction, IState } from './types';
import Header from './components/Header';

const EpisodeList = lazy(() => import('./components/EpisodeList'));

const App = (): JSX.Element => {
  const dispatch = useDispatch<Dispatch<IAction>>();
  const state = useSelector<IState, IState>((state: IState) => state);

  const fetchDataFunc = async (): Promise<void> => {
    const URL = 'https://api.tvmaze.com/singlesearch/shows?q=south-park&embed=episodes';
    const dataFetched = await axios.get(URL);
    const dataJSON = dataFetched.data;
    return dispatch(fetchData([...dataJSON._embedded.episodes]));
  };

  const fetchDataAction = useCallback(() => fetchDataFunc(), [])

  useEffect((): void => {
    state.episodes.length === 0 && fetchDataAction();
  });

  return (
    <Fragment>
      <Router>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route
              exact
              path="/"
              component={EpisodeList}
            />
            <Route
              path="/fav"
              component={EpisodeList}
            />
          </Switch>
        </Suspense>
      </Router>
    </Fragment>
  );
};

export default App;