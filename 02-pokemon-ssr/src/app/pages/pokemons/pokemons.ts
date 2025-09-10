import { Component, computed, effect, inject, input, OnInit, signal } from '@angular/core';
import { PokemonList } from "../../pokemons/components/pokemon-list/pokemon-list";
import { PokemonsService } from '../../pokemons/services/pokemons';
import { Pokemon } from '../../pokemons/interfaces/pokemon.interface';

import { tap } from 'rxjs';
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
  public pokemons = signal<Pokemon[]>([]);
  private title = inject(Title);
  page = input<number | undefined>(undefined, { alias: 'page' });
  currentPage = computed(() => this.page() ?? 1);
  detectChangePage = effect(() => {
    console.log('Current page', this.currentPage());
  });


  ngOnInit(): void {
    this.loadPokemons();
  }


  public loadPokemons(nextPage = 0): void {
    const pageToLoad = Number(this.currentPage()) + nextPage;
    this._pokemonsService.loadPokemons(pageToLoad)
    .pipe(
      tap(() => this.router.navigate([], {queryParams: { page: pageToLoad }})),
      tap(() => this.title.setTitle(`Pokémons - Page ${pageToLoad}`))
    )
    .subscribe(
      {
        next: (pokemons) => {
          this.pokemons.set(pokemons);
        }
      }
    );
  }
}
