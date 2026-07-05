import React, { useEffect, useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Autorization, Pokemons } from './pages';
import * as S from './styled';

// max pokemons 1350

export const App: React.FC = () => {
  const [isAuthorized, setAuthorization] = useState<boolean>(false);
  const [isChangedTab] = useState<boolean>(false); // setIsChangedTab

  const router = window.location.pathname;

  useEffect(() => {
    if (router === '/') {
      window.location.pathname = '/pokedex';
    }
  }, [isAuthorized]);

  return (
    <div>
      <S.GlobalStyle />
      {isAuthorized && (
        <div>
          <BrowserRouter>
            <nav>
              <Link to="/pokedex">Pokemons</Link>
              <Link to="/moves">Moves</Link>
              <Link to="/items">Items</Link>
            </nav>
            <div>
              <Routes>
                <Route
                  path="/pokedex"
                  element={
                    <Pokemons
                      isAuthorized={isAuthorized}
                      isChangedTab={isChangedTab}
                    />
                  }
                />
                <Route path="/moves" element={<div>Moves</div>} />
                <Route path="/items" element={<div>Items</div>} />
              </Routes>
            </div>
          </BrowserRouter>
        </div>
      )}
      {!isAuthorized && <Autorization setAuthorization={setAuthorization} />}
    </div>
  );
};
