import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { globalConstants } from '../../constants';
import * as S from './styled';
import { AppDispatch, selectors, thunks } from '../../store';
import { IPokemon } from '../../types';

interface PokemonsProps {
  isAuthorized: boolean;
  isChangedTab: boolean;
}

export const Pokemons: React.FC<PokemonsProps> = () => {
  const ref = useRef<HTMLDivElement>(null);
  const pageRef = useRef<number>(0);

  const dispatch: AppDispatch = useDispatch();

  const pokemons = useSelector(selectors.pokemons.selectPokemons);

  const [selectedPokemon, setSelectedPokemon] = useState<IPokemon>(null);

  const fetchPokemons = async (page: number) => {
    await dispatch(thunks.pokemons.fetchPokemons({ page }));
  };

  const getPokemons = async (page: number) => {
    fetchPokemons(page);
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
  });

  return (
    <div>
      <S.Pokemons>
        {pokemons?.length
          ? pokemons?.map((pokemon: IPokemon) => (
              <div key={pokemon.id}>
                <S.MiniPokemon
                  key={pokemon.id}
                  onClick={() => setSelectedPokemon(pokemon)}
                >
                  {/* <img src={pokemon.image} alt={pokemon.name} /> */}
                  <img src={pokemon.miniImage} alt={pokemon.name} />
                  {pokemon.name}
                </S.MiniPokemon>
              </div>
            ))
          : null}
        {!pokemons || pokemons?.length <= globalConstants.maxPokemons ? (
          <div ref={ref}>load more</div>
        ) : null}
      </S.Pokemons>
      <S.PokemonBlock>
        {selectedPokemon && (
          <img src={selectedPokemon.image} alt={selectedPokemon.name} />
        )}
      </S.PokemonBlock>
    </div>
  );
};
