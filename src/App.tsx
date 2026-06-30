import React, { useEffect, useState } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { Autorization, Container } from './pages';
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
            <Container
              isChangedTab={isChangedTab}
              isAuthorized={isAuthorized}
            />
          </BrowserRouter>
        </div>
      )}
      {!isAuthorized && <Autorization setAuthorization={setAuthorization} />}
    </div>
  );
};
