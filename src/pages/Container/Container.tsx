import { Route, Routes } from 'react-router-dom';
import { Pokemons } from '../Pokemons';

interface IContainer {
  isAuthorized: boolean;
  isChangedTab: boolean;
}

export const Container: React.FC<IContainer> = ({
  isAuthorized,
  isChangedTab,
}) => {
  return (
    <Routes>
      <Route
        path="/pokedex"
        element={
          <Pokemons isAuthorized={isAuthorized} isChangedTab={isChangedTab} />
        }
      />
      <Route path="/moves" element={<div>Moves</div>} />
      <Route path="/items" element={<div>Items</div>} />
    </Routes>
  );
};
