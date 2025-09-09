import { Component } from '@angular/core';
import { PokemonList } from "../../pokemons/components/pokemon-list/pokemon-list";

@Component({
  selector: 'app-pokemons',
  imports: [PokemonList],
  templateUrl: './pokemons.html',
  styleUrl: './pokemons.scss'
})
export class Pokemons {

}
