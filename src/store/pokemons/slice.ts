import { createSlice } from '@reduxjs/toolkit';
import { fetchPokemons } from './thunks';

const initialState: any = {
  isLoading: null,
  error: null,
  success: null,
  pokemons: [],
};

export const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPokemons.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPokemons.fulfilled, (state, action) => {
        state.success = true;
        state.isLoading = false;
        state.error = null;
        state.pokemons = [...state.pokemons, ...action.payload];
      })
      .addCase(fetchPokemons.rejected, (state, action) => {
        state.isLoading = false;
        state.success = false;
        state.error = action.error.message;
      });
  },
});
