const pokeApi = {}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
}

pokeApi.getPokemons = (offset =0, limit =5) => {
    const url =`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
    .then((detailsRequests) => Promise.all(detailsRequests))
    .then((pokemonDetails) =>pokemonDetails)
}


// https://pokeapi.co/api/v2/pokemon?offset=0&limit=$10