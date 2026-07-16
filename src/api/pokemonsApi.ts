import { globalConstants } from '../constants';

export const getPokemons = async (page: number) => {
  try {
    const res = await fetch(
      `${globalConstants.mainUrl}/api/pokemon?page=${page}`
    );
    const data = await res.json();

    return data;
  } catch (err) {
    console.error('Error fetching:', err);
  }

  return null;
};
