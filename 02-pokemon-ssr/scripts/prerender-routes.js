const TOTAL_POKEMONS = 10;
const TOTAL_PAGES = Math.ceil(10);

(() => {
    const fs = require('fs');
    // Pokemons por id
    const pokemonIds = Array.from({ length: TOTAL_POKEMONS }, (_, i) => i + 1);
    let routes = pokemonIds.map(id => `/pokemons/${id}`)
    .join('\n');

    // Pokemons por página
    for (let page = 1; page <= TOTAL_PAGES; page++) {
        routes += `\n/pokemons/page/${page}`;
    }
    fs.writeFileSync('routes.txt', routes);
})(); 