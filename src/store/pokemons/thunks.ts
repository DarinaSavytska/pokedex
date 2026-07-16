import { createAsyncThunk } from '@reduxjs/toolkit';
import { getPokemons as getApiPokemons } from '../../api';

export const fetchPokemons = createAsyncThunk(
  'pokemons/fetchPokemons',
  async (params: { page: number }) => {
    try {
      const newPokemons = await getApiPokemons(params.page);

      return newPokemons;
    } catch (error) {
      throw new Error(error?.toString());
    }
  }
);
