const params = new URLSearchParams(window.location.search);
const pokemonId = params.get('id');

if (pokemonId) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
        .then(response => response.json())
        .then(data => {
            displayPokemonInfo(data);
        })
        .catch(error => console.error('Erro ao buscar Pokémon:', error));
}

function displayPokemonInfo(pokemon) {
    const pokemonInfoDiv = document.getElementById('pokemon-info');
    pokemonInfoDiv.classList.remove(...pokemonInfoDiv.classList);
    pokemonInfoDiv.classList.add(pokemon.type);
    pokemonInfoDiv.innerHTML = `
        <section class="pokemon-content-details">
            <span class="pokemon-details-number">#${pokemon.id}</span>
            <h1 class="pokemon-details-name">${pokemon.name}</h1>
        </section>
        <img class="pokemon-details-photo" src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
        <section class="pokemon-details-infos">
            <p class="pokemon-details-height">Altura: ${pokemon.height}</p>
            <p class="pokemon-details-weight">Peso: ${pokemon.weight}</p>
        </section>
        <section class="pokemon-content-types">
            <p class="pokemon-details-types">Tipo: ${pokemon.types.map(typeInfo => typeInfo.type.name).join(', ')}</p>
        </section>
        <section class="pokemon-content-skills">
            <p class="pokemon-details-skills">Skills: ${pokemon.abilities.map(abilityInfo => abilityInfo.ability.name).join(', ')}</p>
        </section>
        <section class="pokemon-content-moves">
            <p class="pokemon-details-moves">Movimentos: ${pokemon.moves.map(moveInfo => moveInfo.move.name).join(', ')}</p>
        </section>
    `;
}

