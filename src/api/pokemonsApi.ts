export const getPokemons = async () => {
    try {
        const res = await fetch("https://pokedex-back-cyan.vercel.app/api/pokemon");
        const data = await res.json();

        return data;
    } catch (err) {
        console.error("Error fetching:", err);
    }
}
