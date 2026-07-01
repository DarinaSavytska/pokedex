import { useEffect, useRef, useState } from 'react';
import { getPokemons as getApiPokemons } from '../../api';

interface PokemonsProps {
  isAuthorized: boolean;
  isChangedTab: boolean;
}

export const Pokemons: React.FC<PokemonsProps> = () => {
  const ref = useRef<HTMLDivElement>(null);
  const pageRef = useRef<number>(0);
  const pokemonsRef = useRef<any[]>([]);

  const [pokemons, setPokemons] = useState<any[]>([]);

  const getPokemons = async (page: number) => {
    const newPokemons = await getApiPokemons(page);

    setPokemons([...pokemonsRef.current, ...newPokemons]);
    pokemonsRef.current = [...pokemonsRef.current, ...newPokemons];
  };

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        getPokemons(pageRef.current);
        pageRef.current += 1;
      }
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

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
      <div ref={ref}>load more</div>
    </div>
  );
};
