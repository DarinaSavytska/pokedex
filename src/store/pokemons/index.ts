import { pokemonsSlice } from './slice';
import * as pokemonsThunks from './thunks';
import * as pokemonsSelectors from './selectors';

const { reducer: pokemonsReducer, actions } = pokemonsSlice;

export {
  pokemonsThunks,
  actions as pokemonsActions,
  pokemonsSelectors,
  pokemonsReducer,
};
