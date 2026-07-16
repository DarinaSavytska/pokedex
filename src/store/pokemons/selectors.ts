import { createSelector } from '@reduxjs/toolkit';

const selectSelf = (state: any) => state?.pokemons;

export const selectPokemons = createSelector(
  selectSelf,
  (state) => state.pokemons
);
