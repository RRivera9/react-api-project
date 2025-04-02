import { useState, useEffect } from "react";
export default PokemonInfo;

function PokemonInfo({ pokemonName }) {
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    // For debouncing, set default useState of debouncedpokemon to pokemon
    const [debouncedPokemonName, setDebouncedPokemonName] = useState(pokemonName);

    // Debouncing logic: Update `debouncedPokemonName` after a delay
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedPokemonName(pokemonName);
        }, 500); // 500ms debounce time

        return () => clearTimeout(handler); // Cleanup previous timeout
    }, [pokemonName]);

    useEffect(() => {
        if (!debouncedPokemonName) return;

        setLoading(true);
        setError(null);

        fetch(`https://pokeapi.co/api/v2/pokemon/${debouncedPokemonName.toLowerCase()}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Pokémon not found");
                }
                return response.json();
            })
            .then(data => {
                setPokemon(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, [debouncedPokemonName]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    if (!pokemon) return null;

    return (
        <div>
            <h2>{pokemon.name.toUpperCase()}</h2>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <p>Height: {pokemon.height}</p>
            <p>Weight: {pokemon.weight}</p>
        </div>
    );
}

