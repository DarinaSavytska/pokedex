export const getPokemons = async (page: number) => {
  try {
    // const res = await fetch('http://localhost:3000/api/pokemon');
    // const res = await fetch('https://pokedex-back-cyan.vercel.app/api/pokemon');
    const res = await fetch(`http://localhost:3000/api/pokemon?page=${page}`);
    const data = await res.json();

    return data;
  } catch (err) {
    console.error('Error fetching:', err);
  }

  return null;
};
