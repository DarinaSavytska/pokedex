import {
  combineReducers,
  compose,
  Store,
  ThunkDispatch,
} from '@reduxjs/toolkit';
import { thunk, ThunkMiddleware } from 'redux-thunk';
import { AnyAction, applyMiddleware, createStore } from 'redux';
import {
  pokemonsActions,
  pokemonsReducer,
  pokemonsSelectors,
  pokemonsThunks,
} from './pokemons';
import { IStore } from './types';

const thunks = {
  pokemons: pokemonsThunks,
};

const actions = {
  pokemons: pokemonsActions,
};

const selectors = {
  pokemons: pokemonsSelectors,
};

const rootReducer = combineReducers({
  pokemons: pokemonsReducer,
});

export const configureStore = (): Store => {
  const middleware = [thunk as unknown as ThunkMiddleware];
  const enhancers: any[] = [];
  const composeEnhancers =
    (typeof window !== 'undefined' &&
      // eslint-disable-next-line @typescript-eslint/no-explicit-any, no-underscore-dangle
      (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

  const store = createStore(
    rootReducer,
    {},
    composeEnhancers(applyMiddleware(...middleware, ...enhancers))
  );
  return store;
};

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = ThunkDispatch<IStore, null, AnyAction>;
export default configureStore;
export { thunks, actions, selectors };
