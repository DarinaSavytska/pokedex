import React from 'react';
import { getPokemons as getApiPokemons } from 'api';
import * as S from './styled';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

export const App: React.FC = () => {
  // const [pokemonNum, setPokemonNum] = useState<number | null>(null);

  const getPokemons = async () => {
    const pokemons = await getApiPokemons();
    console.log('pokemons', pokemons);
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
          <Route path="/" element={<div onClick={() => getPokemons()}>Pokemons</div>} />
          <Route path="/moves" element={<div>Moves</div>} />
          <Route path="/items" element={<div>Items</div>} />
        </Routes>
      </BrowserRouter>
    </S.Body>
  );
};
