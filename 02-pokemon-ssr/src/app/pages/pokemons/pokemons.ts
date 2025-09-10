import { Component, computed, effect, inject, input, OnInit, signal } from '@angular/core';
import { PokemonList } from "../../pokemons/components/pokemon-list/pokemon-list";
import { PokemonsService } from '../../pokemons/services/pokemons';
import { Pokemon } from '../../pokemons/interfaces/pokemon.interface';

import { delay, finalize, tap } from 'rxjs';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pokemons',
  imports: [PokemonList],
  templateUrl: './pokemons.html',
  styleUrl: './pokemons.scss'
})
export class Pokemons implements OnInit {
  private _pokemonsService = inject(PokemonsService);
  private router = inject(Router);
  private title = inject(Title);
  pokemonsList = signal<Pokemon[]>([]);
  page = input<number | undefined>(undefined, { alias: 'page' });
  currentPage = computed(() => this.page() ?? 1);

  loadPokemonsEffect = effect(() => {
    this.pokemonsList.set(this._pokemonsService.pokemons());
  });


  ngOnInit(): void {
    this.loadPokemons();
  }


  public loadPokemons(nextPage = 0): void {
    const pageToLoad = Number(this.currentPage()) + nextPage;
    this._pokemonsService.isLoading.set(true);
    this._pokemonsService.loadPokemons(pageToLoad)
    .pipe(
      tap(() => this.router.navigate([], {queryParams: { page: pageToLoad }})),
      tap(() => this.title.setTitle(`Pokémons - Page ${pageToLoad}`)),
      delay(500),
      finalize(() => this._pokemonsService.isLoading.set(false))
    )
    .subscribe();
  }
}
