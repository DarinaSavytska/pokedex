import React, { useEffect, useMemo, useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Autorization, Pokemons, Navigation } from './pages';
import * as S from './styled';
import configureStore from './store';

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

  const store = useMemo(() => configureStore(), []);

  return (
    <div>
      <Provider store={store}>
        <S.GlobalStyle />
        {isAuthorized && (
          <div>
            <BrowserRouter>
              <Navigation />
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
      </Provider>
    </div>
  );
};
