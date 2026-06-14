interface PokemonsProps {
  pokemons: any[];
}

export const Pokemons: React.FC<PokemonsProps> = ({ pokemons }): any => {
  return pokemons?.length
    ? pokemons?.map((pokemon) => (
        <div key={pokemon.id}>
          <div
            key={pokemon.id}
            style={{
              height: '40px',
              backgroundColor: 'lightgray',
              border: '1px solid black',
            }}
          >
            {/* <img src={pokemon.image} alt={pokemon.name} /> */}
            <img src={pokemon.miniImage} alt={pokemon.name} />
            {pokemon.name}
          </div>
        </div>
      ))
    : null;
};
