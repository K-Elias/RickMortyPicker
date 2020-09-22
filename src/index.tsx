import React from 'react';
import { render } from 'react-dom';

const App = (): JSX.Element => {
  return <h1>Hello World</h1>;
};

const root: HTMLElement = document.getElementById('app-root');
if (!root) throw new Error();
render(<App />, root);