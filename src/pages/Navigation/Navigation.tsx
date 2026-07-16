import { Link } from 'react-router-dom';
import * as S from './styled';

export const Navigation: React.FC = () => {
  return (
    <S.Nav>
      <Link to="/pokedex">
        <S.Tab>Pokemons</S.Tab>
      </Link>
      <Link to="/moves">
        <S.Tab>Moves</S.Tab>
      </Link>
      <Link to="/items">
        <S.Tab>Items</S.Tab>
      </Link>
    </S.Nav>
  );
};
