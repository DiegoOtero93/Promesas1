import React, { useEffect, useState } from "react";

function PokemonsApi() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const options = {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
      signal: controller.signal,
    };

    fetch("https://pokeapi.co/api/v2/pokemon?limit=0", options)
      .then((res) => res.json())
      .then((data) => {
        setPokemons(data);
      })
      .catch((err) => console.log(err));

    // Abortar la solicitud fetch si el componente se desmonta
    return () => controller.abort();
  }, []);

  return (
    <>
      <div className="contenedor__Pokemons">
        <h1 className="clase__pokemons">Pokemons</h1>
      </div>

      <div className="contenedorLista__pokemons">
        <ul className="lista__pokemons">
          {pokemons.results ? (
            pokemons.results.map((pokemon, index) => {
              return (
                <div className="contenedor__cards" key={index}>
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                      index + 1
                    }.png`}
                    alt={pokemon.name}
                    className="contenedorPokemon__cardImg"
                  />
                  <p className="contenedorPokemon__nombre">{pokemon.name}</p>
                </div>
              );
            })
          ) : (
            <p>cargando</p>
          )}
        </ul>
      </div>
    </>
  );
}

export default PokemonsApi;
