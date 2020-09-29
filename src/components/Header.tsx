import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import React from 'react';

import { headerStyle } from './styles';
import { IState } from '../types'

const Header = (): JSX.Element => {
  const favourites = useSelector((state: IState) => state.favourites);
  const { pathname } = useLocation();
  let path: string = '/fav'
  let ancre: string = `Favourite(s): ${favourites.length}`;
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