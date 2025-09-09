import { Component, inject, OnInit, signal } from '@angular/core';
import { PokemonList } from "../../pokemons/components/pokemon-list/pokemon-list";
import { PokemonsService } from '../../pokemons/services/pokemons';
import { Pokemon } from '../../pokemons/interfaces/pokemon.interface';

@Component({
  selector: 'app-pokemons',
  imports: [PokemonList],
  templateUrl: './pokemons.html',
  styleUrl: './pokemons.scss'
})
export class Pokemons implements OnInit {
  private _pokemonsService = inject(PokemonsService);
  public pokemons = signal<Pokemon[]>([]);
  ngOnInit(): void {
    this.loadPokemons();
  }


  public loadPokemons(nextPage: number = 0): void {
    this._pokemonsService.loadPokemons(nextPage).subscribe(
      {
        next: (pokemons) => {
          this.pokemons.set([...this.pokemons(), ...pokemons]);
        }
      }
    );
  }
}
