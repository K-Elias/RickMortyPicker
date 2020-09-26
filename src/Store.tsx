import React, { createContext, ReactElement, useReducer } from 'react';

import { IContextProps, IState, IAction } from './types';

interface Props { children: ReactElement };

const initialState: IState = {
  episodes: [],
  favourites: []
};

export const Store = createContext({} as IContextProps);

const reducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case 'FETCH_DATA':
      return { ...state, episodes: action.payload };
    case 'ADD_FAV':
      return { ...state, favourites: [...state.favourites, ...action.payload] };
    default:
      return state;
  }
};

export const Provider = (props: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state)
  return <Store.Provider value={{ state, dispatch }}>{props.children}</Store.Provider>;
};