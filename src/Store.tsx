import { configureStore, createStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
import React from 'react';

import { reducer } from './context/reducer';

export const store = configureStore({ reducer });

export const Store =
  ({ children }: JSX.ElementChildrenAttribute): JSX.Element => {
    return (
      <Provider store={store}>
        {children}
      </Provider>
    );
  }; 