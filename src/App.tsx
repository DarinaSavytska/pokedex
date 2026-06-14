import React, { useEffect, useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { getPokemons as getApiPokemons } from './api';
import { Pokemons } from './pages';

// max pokemons 1350

export const App: React.FC = () => {
  const [pokemons, setPokemons] = useState<any[]>([]);
  const [page, setPage] = useState<number>(0);

  const getPokemons = async (page: number) => {
    const newPokemons = await getApiPokemons(page);
    setPokemons([...pokemons, ...newPokemons]);
  };

  useEffect(() => {
    getPokemons(page);
  }, [page]);

  return (
    <BrowserRouter>
      <nav>
        <Link to="/pokedex" onClick={() => setPokemons([])}>
          Pokemons
        </Link>
        <Link to="/moves" onClick={() => setPokemons([])}>
          Moves
        </Link>
        <Link to="/items" onClick={() => setPokemons([])}>
          Items
        </Link>
      </nav>

      <Routes>
        <Route
          path="/pokedex"
          element={<div onClick={() => setPage(0)}>Pokemons</div>}
        />
        <Route path="/moves" element={<div>Moves</div>} />
        <Route path="/items" element={<div>Items</div>} />
      </Routes>
      <Pokemons pokemons={pokemons} />
      <button type="button" onClick={() => setPage(page + 1)}>
        Get Pokemons
      </button>
    </BrowserRouter>
  );
};
