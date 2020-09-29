import React, {
  lazy,
  Suspense,
  Fragment,
  useEffect, Dispatch
} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { fetchDataAction } from './context/actionContext';
import { IAction, IState } from './types';
import Header from './components/Header';

const EpisodeList = lazy(() => import('./components/EpisodeList'));

const App = (): JSX.Element => {
  const dispatch = useDispatch<Dispatch<IAction>>();
  const state = useSelector<IState, IState>((state: IState) => state);

  useEffect((): void => {
    state.episodes.length === 0 && fetchDataAction(dispatch);
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
              component={() => <EpisodeList path="/" />}
            />
            <Route
              path="/fav"
              component={() => <EpisodeList path="/fav" />}
            />
          </Switch>
        </Suspense>
      </Router>
    </Fragment>
  );
};

export default App;