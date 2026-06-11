import React, { useState } from 'react';
import { getPokemons as getApiPokemons } from 'api';
import * as S from './styled';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

export const App: React.FC = () => {
  // const [pokemonNum, setPokemonNum] = useState<number | null>(null);
  const [pokemons, setPokemons] = useState<any[]>([]);

  const getPokemons = async () => {
    const pokemons = await getApiPokemons();
    console.log('pokemons', pokemons);
    setPokemons(pokemons);
  };

  return (
    <S.Body>
      <BrowserRouter>
        <nav>
          <Link to="/pokedex" onClick={() => setPokemons([])}>Pokemons</Link>
          <Link to="/moves" onClick={() => setPokemons([])}>Moves</Link>
          <Link to="/items" onClick={() => setPokemons([])}>Items</Link>
        </nav>

        <Routes>
          <Route path="/pokedex" element={<div onClick={() => getPokemons()}>Pokemons</div>} />
          <Route path="/moves" element={<div>Moves</div>} />
          <Route path="/items" element={<div>Items</div>} />
        </Routes>
        {pokemons?.length ? pokemons?.map((pokemon) => <div key={pokemon.id}>{pokemon.name}</div>) : null}
      </BrowserRouter>
    </S.Body>
  );
};
