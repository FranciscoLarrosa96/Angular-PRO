import { Component, inject, input, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleCasePipe } from '@angular/common';
import { PokemonDetails } from '../../pokemons/interfaces/pokemonId.interface';
import { PokemonsService } from '../../pokemons/services/pokemons';

@Component({
  selector: 'app-pokemon',
  imports: [CommonModule, TitleCasePipe],
  templateUrl: './pokemon.html',
  styleUrl: './pokemon.scss'
})
export class Pokemon implements OnInit{
  public pokemon = signal<PokemonDetails | null>(null);
  private pokemonSvc = inject(PokemonsService);
  idPokemon = input<string | undefined>(undefined, { alias: 'id' });
  ngOnInit(): void {
    this.pokemonSvc.loadPokemonById(this.idPokemon()!).subscribe({
      next: (pokemon) => {
        this.pokemon.set(pokemon);
      },
      error: () => {
        this.pokemon.set(null);
      }
    });
  }

}
