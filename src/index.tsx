import { render } from 'react-dom';
import React from 'react';

import { Store } from './Store';
import App from './App';

const Main = (): JSX.Element => (
  <Store>
    <App />
  </Store>
);

const root: HTMLElement = document.getElementById('app-root');
if (!root) throw new Error();
render(<Main />, root);