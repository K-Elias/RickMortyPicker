import React, { createContext, useReducer } from 'react';

import { IContextProps, IState } from './types';
import { reducer } from './context/reducer';

const initialState: IState = {
  episodes: [],
  favourites: []
};

export const Store = createContext({} as IContextProps);

export const Provider = ({ children }: JSX.ElementChildrenAttribute): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>
      {children}
    </Store.Provider>
  );
};