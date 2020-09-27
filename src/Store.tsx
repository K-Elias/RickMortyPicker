import React, { createContext, useReducer } from 'react';

import { IContextProps, IState } from './types';
import { reducer } from './context/reducer';

interface Props { children: JSX.ElementChildrenAttribute }

const initialState: IState = {
  episodes: [],
  favourites: []
};

export const Store = createContext({} as IContextProps);

export const Provider = (props: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>
      {props.children}
    </Store.Provider>
  );
};