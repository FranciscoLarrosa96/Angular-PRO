import { Component, computed, effect, input } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pokemon-card',
  imports: [RouterLink],
  templateUrl: './pokemon-card.html',
  styleUrl: './pokemon-card.scss'
})
export class PokemonCard {
  public pokemon = input.required<Pokemon>();
  public pokemonImg = computed(() => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemon().id}.svg`;
  });
  // logEffect = effect(() => {
  //   console.log('Pokemon card', this.pokemon());
  // });
}
