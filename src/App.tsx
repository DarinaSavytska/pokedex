import React, { useState, useEffect } from 'react';
import { getMove } from 'api';
import * as S from './styled';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

export const App: React.FC = () => {
  const [pokemonNum, setPokemonNum] = useState<number | null>(null);

  const getPokemonMoves = () => {
    if (pokemonNum !== null) {
      getMove(pokemonNum).then(data => console.log(data));
    }
  };

  return (
    <S.Body>
      <BrowserRouter>
        <nav>
          <Link to="/">Pokemons</Link>
          <Link to="/moves">Moves</Link>
          <Link to="/items">Items</Link>
        </nav>

        <Routes>
          <Route path="/" element={<div>Pokemons</div>} />
          <Route path="/moves" element={<div>Moves</div>} />
          <Route path="/items" element={<div>Items</div>} />
        </Routes>
      </BrowserRouter>
    </S.Body>
  );
};
