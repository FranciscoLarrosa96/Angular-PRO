const TOTAL_POKEMONS = 10;
const TOTAL_PAGES = Math.ceil(10);

(async () => {
    const fs = require('fs');
    // Pokemons por id
    const pokemonIds = Array.from({ length: TOTAL_POKEMONS }, (_, i) => i + 1);
    let routes = pokemonIds.map(id => `/pokemons/${id}`)
    .join('\n');

    // Pokemons por página
    for (let page = 1; page <= TOTAL_PAGES; page++) {
        routes += `\n/pokemons/page/${page}`;
    }

    // Por nombre de pokemon
    const pokemonNames = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${TOTAL_POKEMONS}`)
        .then(response => response.json())
        .then(data => data.results.map(pokemon => pokemon.name));
    routes += '\n' + pokemonNames.map(name => `/pokemons/${name}`).join('\n');

    fs.writeFileSync('routes.txt', routes);
})(); 