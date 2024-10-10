



function convertPokemonTypesToLi(pokemonTypes) {
    return pokemonTypes.map((typeSlot) => `<li class="pokemon-type">${typeSlot.type.name}</li>` )
}

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon">
            <span class="pokemon-number">${pokemon.order}</span>
            <span class="pokemon-name">${pokemon.name}</span>
            <div>
                <ol class="pokemon-types">
                    ${convertPokemonTypesToLi(pokemon.types).join('')}
                </ol>
                <img class="pokemon-img" src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}">
            </div>
        </li>
    `
}

const pokemonList = document.getElementById('pokemons-list')

pokeApi.getPokemons().then((pokemons = []) => {
    const newHtml = pokemons.map(convertPokemonToLi).join('')
    pokemonList.innerHTML = newHtml
})

