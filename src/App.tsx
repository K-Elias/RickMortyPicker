import React, {
  lazy,
  Suspense,
  useContext,
  Fragment,
  useEffect
} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import { fetchDataAction } from './context/actionContext';
import { Store } from './Store';
import Header from './components/Header';

const EpisodeList = lazy(() => import('./components/EpisodeList'));

const App = (): JSX.Element => {
  const { state, dispatch } = useContext(Store);

  useEffect((): void => {
    state.episodes.length === 0 && fetchDataAction(dispatch);
  });

  const Page = (): JSX.Element => <EpisodeList />;

  return (
    <Fragment>
      <Router>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route
              exact
              path="/"
              component={Page}
            />
            <Route
              path="/fav"
              component={Page}
            />
          </Switch>
        </Suspense>
      </Router>
    </Fragment>
  );
};

export default App;