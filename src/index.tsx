import { render } from 'react-dom';
import React from 'react';

import { Provider } from './Store';
import App from './App';

const Main = (): JSX.Element => (
  <Provider><App /></Provider>
);

const root: HTMLElement = document.getElementById('app-root');
if (!root) throw new Error();
render(<Main />, root);