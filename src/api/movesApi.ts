// add constant for the base URL of the API

export const getMove = async (id: number) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon`);
    // const response = await fetch(`https://pokeapi.co/api/v2/move/${id}`);
    // const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();
    return data;
}
