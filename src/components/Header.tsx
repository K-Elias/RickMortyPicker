import { Link, useLocation } from 'react-router-dom';
import React, { useContext } from 'react';

import { headerStyle } from './styles';
import { Store } from '../Store';

const Header = (): JSX.Element => {
  const { state } = useContext(Store);
  const { pathname } = useLocation();
  let path: string = '/fav'
  let ancre: string = `Favourite(s): ${state.favourites.length}`;
  if (pathname === '/fav') {
    path = '/'
    ancre = 'Back to episodes';
  }

  return (
    <header style={headerStyle}>
      <div>
        <h1>South Park</h1>
        <p>Pick your favourite episode</p>
      </div>
      <div>
        <Link to={path} >{ancre}</Link>
      </div>
    </header>
  );
}

export default Header;