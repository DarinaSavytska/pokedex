import { useEffect, useState } from 'react';
import { getPokemons as getApiPokemons } from '../../api';

interface PokemonsProps {
  isAuthorized: boolean;
  isChangedTab: boolean;
}

export const Pokemons: React.FC<PokemonsProps> = ({
  isAuthorized,
  isChangedTab,
}) => {
  const [pokemons, setPokemons] = useState<any[]>([]);
  const [page, setPage] = useState<number>(0);

  const getPokemons = async (page: number) => {
    const newPokemons = await getApiPokemons(page);
    setPokemons([...pokemons, ...newPokemons]);
  };

  useEffect(() => {
    if (isAuthorized) {
      getPokemons(page);
    }
  }, [page, isAuthorized]);

  useEffect(() => {
    setPage(0);
    setPokemons([]);
  }, [isChangedTab]);

  return (
    <div>
      {pokemons?.length
        ? pokemons?.map((pokemon) => (
            <div key={pokemon.id}>
              <div
                key={pokemon.id}
                style={{
                  height: '40px',
                  border: '1px solid black',
                }}
              >
                {/* <img src={pokemon.image} alt={pokemon.name} /> */}
                <img src={pokemon.miniImage} alt={pokemon.name} />
                {pokemon.name}
              </div>
            </div>
          ))
        : null}
      <button type="button" onClick={() => setPage(page + 1)}>
        Get Pokemons
      </button>
    </div>
  );
};
