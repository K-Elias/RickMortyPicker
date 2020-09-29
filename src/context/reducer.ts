import { createSlice } from '@reduxjs/toolkit';
import { IState, IAction } from '../types';

const rootSlice = createSlice({
  name: "root",
  initialState: {
    episodes: [],
    favourites: []
  } as IState,
  reducers: {
    fetchData: (state: IState, action: IAction) => ({ ...state, episodes: action.payload }),
    addFav: (state: IState, action: IAction) =>
      ({ ...state, favourites: [...state.favourites, ...action.payload] }),
    removeFav: (state: IState, action: IAction) => ({ ...state, favourites: action.payload }),
  }
});

export const reducer = rootSlice.reducer;

export const { fetchData, addFav, removeFav } = rootSlice.actions;