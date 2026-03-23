import {
  Component,
  computed,
  effect,
  inject,
  input,
  OnInit,
  signal,
} from '@angular/core';
import { PokemonList } from '../../pokemons/components/pokemon-list/pokemon-list';
import { PokemonsService } from '../../pokemons/services/pokemons';
import { Pokemon } from '../../pokemons/interfaces/pokemon.interface';

import { delay, finalize, map, tap } from 'rxjs';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-pokemons',
  imports: [PokemonList, RouterLink],
  templateUrl: './pokemons.html',
  styleUrl: './pokemons.scss',
})
export class Pokemons {
  private _pokemonsService = inject(PokemonsService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private title = inject(Title);
  pokemonsList = signal<Pokemon[]>([]);
  // page = input<number | undefined>(undefined, { alias: 'page' });
  // currentPage = computed(() => this.page() ?? 1);
  public currentPage = toSignal<number>(
    this.route.paramMap.pipe(
      map((params) => params.get('page') ?? '1'),
      map((page) => (isNaN(Number(page)) ? 1 : Number(page))),
    ),
  );
  loadPokemonsEffect = effect(() => {
    this.pokemonsList.set(this._pokemonsService.pokemons());
  });

  loadPageOnChanged = effect(() => {
    if (this.currentPage()! < 1) {
      this.router.navigate(['/pokemons/page/1']);
      return;
    }
    this.loadPokemons(this.currentPage());
  });

  // ngOnInit(): void {
  //   if (this._pokemonsService.pokemons().length === 0) {
  //     this.loadPokemons();
  //   }
  // }

  public loadPokemons(nextPage = 0): void {
    const pageToLoad = Number(this.currentPage()) + nextPage;
    this._pokemonsService.isLoading.set(true);
    this._pokemonsService
      .loadPokemons(pageToLoad)
      .pipe(
        // tap(() =>
        //   this.router.navigate([], { queryParams: { page: pageToLoad } }),
        // ),
        tap(() => this.title.setTitle(`Pokémons - Page ${pageToLoad}`)),
        delay(500),
        finalize(() => this._pokemonsService.isLoading.set(false)),
      )
      .subscribe();
  }
}
